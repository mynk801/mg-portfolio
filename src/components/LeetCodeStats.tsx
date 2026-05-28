"use client";

import { useEffect, useState } from "react";
import { Code2, Target, Trophy, Flame } from "lucide-react";
import { motion } from "framer-motion";

interface LeetCodeData {
  status: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: string;
  ranking: number;
}

export default function LeetCodeStats({ username }: { username: string }) {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch from alfa-leetcode-api (more reliable)
    Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`).then(res => res.json()),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/profile`).then(res => res.json())
    ])
      .then(([solvedData, profileData]) => {
        if (solvedData.solvedProblem !== undefined && profileData.ranking !== undefined) {
          setStats({
            status: "success",
            totalSolved: solvedData.solvedProblem,
            totalQuestions: 3000,
            easySolved: solvedData.easySolved,
            mediumSolved: solvedData.mediumSolved,
            hardSolved: solvedData.hardSolved,
            acceptanceRate: profileData.ranking ? "N/A" : "0", // Alfa API doesn't easily expose acceptance rate in the same way, we can hide it or use a default
            ranking: profileData.ranking,
          });
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return (
      <div className="w-full h-32 flex items-center justify-center bg-zinc-900/30 border border-zinc-800/50 rounded-3xl animate-pulse">
        <span className="text-zinc-500 text-sm tracking-widest uppercase">Loading Stats...</span>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="w-full p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl flex items-center gap-4">
        <Code2 className="text-zinc-600" size={24} />
        <p className="text-zinc-500 text-sm">Could not load LeetCode statistics.</p>
      </div>
    );
  }

  return (
    <div className="w-full p-6 lg:p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:bg-zinc-900/50 hover:border-champagne/20 transition-all duration-500 group relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/5 blur-3xl group-hover:bg-champagne/10 transition-colors pointer-events-none" />
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Header & Total */}
        <div className="flex items-center gap-6">
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 shadow-inner group-hover:border-champagne/30 transition-colors">
            {/* Simple circular progress approximation */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-800" />
              <circle 
                cx="32" cy="32" r="30" 
                fill="none" stroke="currentColor" strokeWidth="2" 
                className="text-champagne-light transition-all duration-1000 ease-out"
                strokeDasharray={`${(stats.totalSolved / 3000) * 188} 188`}
              />
            </svg>
            <Code2 size={24} className="text-silver-muted group-hover:text-champagne-light transition-colors" />
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-silver-muted mb-1">LeetCode Stats</h4>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground group-hover:text-champagne-light transition-colors">
                {stats.totalSolved}
              </span>
              <span className="text-sm font-medium text-zinc-500">Solved</span>
            </div>
          </div>
        </div>

        {/* Right Side: Breakdown */}
        <div className="flex gap-4 sm:gap-6 w-full md:w-auto">
          {/* Easy */}
          <div className="flex flex-col flex-1 md:flex-none">
            <span className="text-xs font-medium text-emerald-500/80 mb-1">Easy</span>
            <span className="text-lg font-semibold text-zinc-300">{stats.easySolved}</span>
          </div>
          <div className="w-px h-10 bg-zinc-800" />
          
          {/* Medium */}
          <div className="flex flex-col flex-1 md:flex-none">
            <span className="text-xs font-medium text-amber-500/80 mb-1">Medium</span>
            <span className="text-lg font-semibold text-zinc-300">{stats.mediumSolved}</span>
          </div>
          <div className="w-px h-10 bg-zinc-800" />
          
          {/* Hard */}
          <div className="flex flex-col flex-1 md:flex-none">
            <span className="text-xs font-medium text-rose-500/80 mb-1">Hard</span>
            <span className="text-lg font-semibold text-zinc-300">{stats.hardSolved}</span>
          </div>
        </div>
      </div>
      
      {/* Bottom stats row */}
      <div className="flex items-center gap-6 mt-6 pt-4 border-t border-zinc-800/50">
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
          <Trophy size={14} className="text-champagne/70" />
          <span>Rank: <span className="text-zinc-300">{stats.ranking.toLocaleString()}</span></span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
          <Target size={14} className="text-champagne/70" />
          <span>Acceptance: <span className="text-zinc-300">{stats.acceptanceRate}%</span></span>
        </div>
      </div>
    </div>
  );
}
