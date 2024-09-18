// src/app/components/chat/chat.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiChatService } from './api-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule]
})
export class ChatComponent {
  @ViewChild('audioInput') audioInput: ElementRef;
  conversation: { user: string, bot: string }[] = [];
  audioBlob: Blob | null = null;

  constructor(
    private apiChatService: ApiChatService
  ) { }

  onAudioInputChange(event: any) {
    const file = event.target.files[0];
    console.log()
    if (file) {
      this.audioBlob = file;
      this.uploadAudio();
    }
  }

  uploadAudio() {
    if (this.audioBlob) {
      const formData = new FormData();
      formData.append('audio', this.audioBlob, 'audio.webm');
        this.apiChatService.createAudioTranscription(formData).subscribe(response => {
            const question = response.transcription;
            this.conversation.push({ user: question, bot: '' });
           // this.askChatGPT(question);
          });
    }
  }

  /*askChatGPT(question: string) {
    this.http.post<any>('/chat/gpt', { question }).subscribe(response => {
      const answer = response.answer;
      this.conversation[this.conversation.length - 1].bot = answer;
    });
  }*/

  startRecording() {
    this.audioInput.nativeElement.click();
  }
}