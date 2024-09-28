import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  private pusher: Pusher;

  // constructor() {
  //   this.pusher = new Pusher('6ab8de5e24d74083ee4d', {
  //     cluster: 'eu',
  //   });
  // }

  constructor() {
    // this.pusher = new Pusher('6ab8de5e24d74083ee4d', {
    //   cluster: 'eu',
    // });
    // this.pusher.connection.bind('connected', () => {
    //   console.log('Connected to Pusher');
    // });
    // this.pusher.connection.bind('error', (err: any) => {
    //   console.error('Pusher error:', err);
    // });
    // Pusher.logToConsole = true;
  }

  subscribe(
    channelName: string,
    eventName: string,
    callback: (data: any) => void
  ) {
    const channel = this.pusher.subscribe(channelName);
    channel.bind(eventName, callback);

    channel.bind('pusher:subscription_succeeded', () => {
      console.log(`Subscribed to channel: ${channelName}`);
    });

    channel.bind('pusher:subscription_error', (status: any) => {
      console.error(`Failed to subscribe to channel: ${channelName}`, status);
    });
  }

  unsubscribe(channelName: string) {
    this.pusher.unsubscribe(channelName);
  }
}
