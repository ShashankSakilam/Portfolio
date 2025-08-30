'use client';

import { Timeline } from '@/components/ui/timeline';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function JourneySection() {
  const journeyData = [
    {
      title: "2018 - 2020",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Early Foundations
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey began at Vidyodaya High School, where I built a strong analytical foundation. This period was marked by securing state 3rd and 5th ranks in the Srinivasa Ramanujan Mathematics Olympiad and graduating with a perfect 10/10 GPA.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/30 rounded-full text-[#ADFF2F] text-sm">
              🏆 State 3rd Rank
            </span>
            <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/30 rounded-full text-[#ADFF2F] text-sm">
              📊 10/10 GPA
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Entering the World of Tech
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              After achieving 97.1% at Narayana Junior College, I moved to Hyderabad to pursue my B.Tech in Computer Science at MGIT, officially starting my path in the tech world with a current CGPA of <span className="text-[#ADFF2F] font-semibold">9.30</span>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
              🎓 97.1% Score
            </span>
            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm">
              🏫 MGIT CSE
            </span>
            <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/30 rounded-full text-[#ADFF2F] text-sm">
              📈 9.30 CGPA
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Discovering a Passion for Design
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              I joined the aDOPE Design Club, where I found my passion for UI/UX. I immediately took the initiative to organize and conduct a hands-on UI/UX workshop for fellow students, sharing my growing knowledge with the community.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm">
              🎨 aDOPE Design Club
            </span>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm">
              🛠️ UI/UX Workshop
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Leading the Creative Charge
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed">
              I was appointed the Head of the Design Club. In this role, I had the privilege of shaping the club's future by recruiting the next generation of designers, crafting design challenges, and conducting interviews to build a talented team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm">
              👑 Head of Design Club
            </span>
            <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm">
              🎯 Team Building
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              A Year of Impact and Achievement
            </h4>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              This year marked a series of significant milestones:
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h5 className="text-xl font-semibold text-white mb-3">Feb/March: Organizing on a National Scale</h5>
              <p className="text-gray-300">
                Kicked off the year by helping lead two national-level hackathons. I co-organized HackSavvy, managing logistics for 180+ teams competing for a ₹2.5L prize pool, and served as the Design Coordinator for our college's AI Hack Day, leading its visual branding.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h5 className="text-xl font-semibold text-white mb-3">March: Creative Leadership</h5>
              <p className="text-gray-300">
                I led our design team in producing over 110 design assets for "Nirvana," our college's annual fest, managing the entire creative workflow.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h5 className="text-xl font-semibold text-white mb-3">June: ISTE Recognition</h5>
              <p className="text-gray-300">
                I was honored to be selected as the sole CSE representative for the Indian Society for Technical Education (ISTE).
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#ADFF2F]/10 to-[#ADFF2F]/5 border border-[#ADFF2F]/30 rounded-xl p-6">
              <h5 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                🏆 July: Winning Moment - 1st Place at 100xDemo Day
              </h5>
              <p className="text-gray-300 mb-4">
                The highlight of my journey. My GenAI project, Creator Pulse, was selected from over 50 projects for the prestigious 100xEngineers Demo Day. Pitching against the top 5 finalists, we secured first place, earning validation from a panel of founders, entrepreneurs, and industry mentors.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/40 rounded-full text-[#ADFF2F] text-sm font-medium">
                  🥇 1st Place
                </span>
                <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/40 rounded-full text-[#ADFF2F] text-sm font-medium">
                  🤖 Creator Pulse
                </span>
              </div>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h5 className="text-xl font-semibold text-white mb-3">September: Event Management</h5>
              <p className="text-gray-300">
                As a student convener, I helped organize "Magistech," a national technical festival, successfully managing the event and drawing over 60 teams to register.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/30 rounded-full text-[#ADFF2F] text-sm">
              🎨 110+ Design Assets
            </span>
            <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/30 rounded-full text-[#ADFF2F] text-sm">
              🏆 100x Winner
            </span>
            <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/30 rounded-full text-[#ADFF2F] text-sm">
              👥 60+ Teams
            </span>
            <span className="px-3 py-1 bg-[#ADFF2F]/20 border border-[#ADFF2F]/30 rounded-full text-[#ADFF2F] text-sm">
              📈 9.30 CGPA
            </span>
          </div>
        </div>
      ),
    },
  ];

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <motion.button
          onClick={handleGoBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </motion.button>
      </div>

      <Timeline data={journeyData} />
    </div>
  );
}
