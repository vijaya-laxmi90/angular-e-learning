import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-testnow',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './testnow.component.html',
  styleUrls: ['./testnow.component.css'],
})
export class TestnowComponent {
  contests = [
    {
      id: 1,
      name: 'CodeChef Contest',
      date: '2024-11-20',
      description: 'Participate in CodeChef challenges and enhance your coding skills.',
      code: 'Reverse a String',
      isParticipating: false,
      isSolved: false,
      userAnswer: '',
    },
    {
      id: 2,
      name: 'LeetCode Weekly',
      date: '2024-11-21',
      description: 'Solve exciting problems in this weekly contest.',
      code: 'Find Missing Number in Array',
      isParticipating: false,
      isSolved: false,
      userAnswer: '',
    },
    {
      id: 3,
      name: 'Hackathon 2024',
      date: '2024-12-01',
      description: 'Join teams to innovate and build solutions.',
      code: 'Sort an Array of Strings',
      isParticipating: false,
      isSolved: false,
      userAnswer: '',
    },
  ];

  toggleParticipation(contestId: number) {
    const contest = this.contests.find((c) => c.id === contestId);
    if (contest) {
      contest.isParticipating = !contest.isParticipating;
    }
  }

  markAsSolved(contestId: number) {
    const contest = this.contests.find((c) => c.id === contestId);
    if (contest && contest.userAnswer) {
      contest.isSolved = true;
      alert(`Contest "${contest.name}" has been marked as solved!`);
    }
  }

  updateAnswer(contestId: number, answer: string) {
    const contest = this.contests.find((c) => c.id === contestId);
    if (contest) {
      contest.userAnswer = answer;
    }
  }
}
