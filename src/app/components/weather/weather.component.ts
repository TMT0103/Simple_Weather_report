import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService, WeatherData } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  city: string = '';
  weatherData: WeatherData | null = null;
  errorMessage: string = '';
  showCard: boolean = false;

  constructor(private weatherService: WeatherService) {}

  onSubmit(): void {
    if (!this.city.trim()) {
      this.displayError('Please enter a city');
      return;
    }

    this.weatherService.getWeatherData(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = '';
        this.showCard = true;
      },
      error: (error) => {
        this.displayError('Could not fetch weather data');
        console.error(error);
      }
    });
  }

  displayError(message: string): void {
    this.errorMessage = message;
    this.weatherData = null;
    this.showCard = true;
  }

  getTempInCelsius(tempKelvin: number): string {
    return (tempKelvin - 273.15).toFixed(1);
  }

  getWeatherEmoji(weatherId: number): string {
    if (weatherId >= 200 && weatherId < 300) return '⛈';
    if (weatherId >= 300 && weatherId < 400) return '🌧';
    if (weatherId >= 500 && weatherId < 600) return '🌧';
    if (weatherId >= 600 && weatherId < 700) return '❄';
    if (weatherId >= 700 && weatherId < 800) return '🌫';
    if (weatherId === 800) return '☀';
    if (weatherId >= 801 && weatherId < 810) return '☁';
    return '❓';
  }
}