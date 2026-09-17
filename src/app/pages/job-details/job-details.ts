import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Job {
  id: number;
  company: string;
  title: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  logo: string;
  description: string;
  skills: string[];
}

@Component({
  selector: 'app-job-details',
  imports: [RouterLink],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})
export class JobDetails {

  jobId: number = 0;
  selectedJob: Job | undefined;

  jobs: Job[] = [
    {
      id: 1,
      company: 'TechCorp India',
      title: 'Java Developer',
      location: 'Pune, Maharashtra',
      salary: '₹4 - ₹7 LPA',
      type: 'Full Time',
      experience: '0-2 Years',
      logo: '🏢',
      description:
        'We are looking for a motivated Java Developer to join our development team and build modern web applications.',
      skills: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'Git']
    },

    {
      id: 2,
      company: 'Innovate Solutions',
      title: 'Angular Developer',
      location: 'Bangalore, Karnataka',
      salary: '₹5 - ₹9 LPA',
      type: 'Full Time',
      experience: '1-3 Years',
      logo: '💻',
      description:
        'Join our frontend development team and create responsive and user-friendly applications using Angular.',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap']
    },

    {
      id: 3,
      company: 'Digital Works',
      title: 'Frontend Developer',
      location: 'Mumbai, Maharashtra',
      salary: '₹3 - ₹6 LPA',
      type: 'Full Time',
      experience: '0-2 Years',
      logo: '🚀',
      description:
        'We are looking for a creative frontend developer to build modern and responsive web interfaces.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git']
    },

    {
      id: 4,
      company: 'Cloud Systems',
      title: '.NET Developer',
      location: 'Hyderabad, Telangana',
      salary: '₹4 - ₹8 LPA',
      type: 'Full Time',
      experience: '0-2 Years',
      logo: '☁️',
      description:
        'Work with our development team to create scalable applications using Microsoft .NET technologies.',
      skills: ['C#', '.NET', 'ASP.NET', 'SQL', 'Entity Framework']
    }
  ];

  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {

      this.jobId = Number(params.get('id'));

      this.selectedJob = this.jobs.find(
        job => job.id === this.jobId
      );

    });

  }

}