// Import necessary modules from your application
import { Request, Response } from 'express';

export async function getDungeon(req: Request, res: Response) {
  const rows = 20;
  const cols = 20;
  let grid = Array.from({ length: rows }, () => Array(cols).fill('x'));
  let currentRow = 10;
  let currentCol = 10;
  grid[currentRow][currentCol] = 'o';

  // Store all room positions to find the farthest one later
  let roomPositions = [{ row: currentRow, col: currentCol }];

  const isRoomPlaceable = (row: number, col: number) => {
    const directions = [
      [-1, 0], // up
      [1, 0],  // down
      [0, -1], // left
      [0, 1]   // right
    ];
    let adjacentRooms = 0;
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        if (grid[newRow][newCol] === 'o') {
          adjacentRooms++;
        }
      }
    }
    return adjacentRooms < 2;
  };

  for (let i = 0; i < 120; i++) {
    let retries = 10; // Limit retries to avoid infinite loop
    let direction, newRow, newCol;

    do {
      direction = Math.floor(Math.random() * 4);
      newRow = currentRow;
      newCol = currentCol;

      switch (direction) {
        case 0: // up
          if (currentRow > 0) newRow--;
          break;
        case 1: // down
          if (currentRow < rows - 1) newRow++;
          break;
        case 2: // left
          if (currentCol > 0) newCol--;
          break;
        case 3: // right
          if (currentCol < cols - 1) newCol++;
          break;
      }

      retries--;
    } while (retries > 0 && !isRoomPlaceable(newRow, newCol));

    currentRow = newRow;
    currentCol = newCol;
    grid[currentRow][currentCol] = Math.random() > 0.2 ? 'o' : 'E';
    roomPositions.push({ row: currentRow, col: currentCol });
  }

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };
  
  // Find the room farthest from the starting position
  let farthestRoom = roomPositions[0];
  let maxDistance = 0;
  
  for (const position of roomPositions) {
    const distance = calculateDistance(10, 10, position.row, position.col);
    if (distance > maxDistance) {
      maxDistance = distance;
      farthestRoom = position;
    }
  }
  
  // Place the boss room
  grid[farthestRoom.row][farthestRoom.col] = 'B';
  // Send the player as a response
  res.status(200).json(grid);
}