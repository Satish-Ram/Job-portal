import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
interface Job {
  id: number;
  company: string;
  title: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  logo: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  jobs: Job[] = [
    {
      id:1,
      company: 'TechCorp India',
      title: 'Java Developer',
      location: 'Pune, Maharashtra',
      salary: '₹4 - ₹7 LPA',
      type: 'Full Time',
      experience: '0-2 Years',
      logo: '🏢'
    },
    {
      id:2,
      company: 'Innovate Solutions',
      title: 'Angular Developer',
      location: 'Bangalore, Karnataka',
      salary: '₹5 - ₹9 LPA',
      type: 'Full Time',
      experience: '1-3 Years',
      logo: '💻'
    },
    {
      id:3,
      company: 'Digital Works',
      title: 'Frontend Developer',
      location: 'Mumbai, Maharashtra',
      salary: '₹3 - ₹6 LPA',
      type: 'Full Time',
      experience: '0-2 Years',
      logo: '🚀'
    },
    {
      id:4,
      company: 'Cloud Systems',
      title: '.NET Developer',
      location: 'Hyderabad, Telangana',
      salary: '₹4 - ₹8 LPA',
      type: 'Full Time',
      experience: '0-2 Years',
      logo: '☁️'
    }
  ];
  searchKeyword: string = '';
  searchLocation: string = '';

  filteredJobs: Job[] = [];

  constructor() {
    this.filteredJobs = this.jobs;
  }
  searchJobs(): void {

    const keyword = this.searchKeyword.toLowerCase().trim();
    const location = this.searchLocation.toLowerCase().trim();

    this.filteredJobs = this.jobs.filter(job => {

      const matchesKeyword =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword);

      const matchesLocation =
        !location ||
        job.location.toLowerCase().includes(location);

      return matchesKeyword && matchesLocation;
    });

  }
}