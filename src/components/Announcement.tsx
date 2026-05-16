import React from 'react';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';
import ann from '../assets/announcememt.jpeg';

export default function Announcement() {
  return (
    <section className="py-20 bg-navy-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gold-500/10 rounded-3xl blur-xl" />
            <img
              src={ann}
              alt="Join the Y.E.G Team"
              className="relative w-full rounded-2xl border border-white/10 shadow-navy object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
              🚨 We're Expanding — Join the Solar Movement!
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Be Part of the Clean Energy Revolution
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              ☀️ Y.E.G General Contractors LLC is on a mission to power homes, businesses, and municipalities
              with clean, renewable energy. As we continue to grow across multiple states, we are actively looking for
              driven, energetic,
              and goal-oriented individuals to join our fast-growing team.
            </p>

            <div className="space-y-3 mb-8">
              {['🔹 Sales Consultants', '🔹 Field Sales Agents'].map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm"
                >
                  <Briefcase className="h-4 w-4 text-gold-400 shrink-0" />
                  {role}
                </div>
              ))}
            </div>

            <p className="text-slate-400 text-sm mb-6">
              If you're hungry for success, passionate about making an impact, and excited to work in one of the fastest-growing industries — this is your moment.
            </p>

            <a
              href="mailto:hireme@yourenergyguy.com"
              className="btn-gold inline-flex gap-2"
            >
              Apply Now — hireme@yourenergyguy.com <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}