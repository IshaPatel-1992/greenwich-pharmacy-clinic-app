// src/components/TeamSection.jsx
import React from 'react';

const allTeamMembers = [
  {
    name: 'Dr. Amy Patel',
    title: 'Pharmacist',
    image: '/assets/team1.jpg',
    bio: 'Over 15 years of experience in patient-focused care.',
  },
  {
    name: 'John Lee',
    title: 'Pharmacy Assistant',
    image: '/assets/team2.jpg',
    bio: 'Ensures smooth operations and support.',
  },
  {
    name: 'Sarah Wong',
    title: 'Customer Care',
    image: '/assets/team3.jpg',
    bio: 'Helps patients with prescriptions and insurance.',
  },
  {
    name: 'Michael Singh',
    title: 'Clinical Pharmacist',
    image: '/assets/team4.jpg',
    bio: 'Specialist in therapy management and medication.',
  },
];

export default function TeamSection({ limit, showFull = false }) {
  const membersToShow = limit ? allTeamMembers.slice(0, limit) : allTeamMembers;

  return (
    <section className="py-16 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold text-teal-700 mb-10">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {membersToShow.map((member, idx) => (
          <div key={idx} className="w-60">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover rounded-xl mb-4 shadow"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.title}</p>
            {showFull && (
              <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            )}
          </div>
        ))}
      </div>

      {!showFull && (
        <a href="/about" className="text-teal-600 font-medium mt-6 inline-block hover:underline">
          Meet the full team →
        </a>
      )}
    </section>
  );
}
