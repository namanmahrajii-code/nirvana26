'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/layout/Navbar';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { EventUniverse } from '@/components/sections/EventUniverse';
import { EventExplorer } from '@/components/sections/EventExplorer';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { SpeakersSection } from '@/components/sections/SpeakersSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { SponsorsSection } from '@/components/sections/SponsorsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { RegistrationModal } from '@/components/modals/RegistrationModal';
import { EventDetailModal } from '@/components/modals/EventDetailModal';
import { EventData, FEST_EVENTS } from '@/data/events';

export default function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [targetRegisterEventId, setTargetRegisterEventId] = useState<string>('hackathon');

  const handleOpenDetail = (event: EventData) => {
    setSelectedEvent(event);
    setDetailModalOpen(true);
  };

  const handleOpenRegister = (eventId?: string) => {
    if (eventId) {
      setTargetRegisterEventId(eventId);
    }
    setRegisterModalOpen(true);
  };

  const handleScrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#060608] text-[#F4F4F6] relative selection:bg-[#E50914] selection:text-white">
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Intro Loader */}
      <LoadingScreen />

      {/* Navigation HUD */}
      <Navbar onOpenRegister={handleOpenRegister} />

      {/* ACT 01 // Hero & Opening Scene */}
      <HeroSection
        onExploreClick={handleScrollToEvents}
        onRegisterClick={() => handleOpenRegister('hackathon')}
      />

      {/* ACT 01.1 // The Manifesto & Fact Pillars */}
      <ManifestoSection />

      {/* ACT 02 // 3D Event Universe */}
      <EventUniverse
        onSelectEvent={handleOpenDetail}
        onRegisterEvent={handleOpenRegister}
      />

      {/* ACT 02.1 // Event Explorer Directory & Category Filters */}
      <EventExplorer
        onSelectEvent={handleOpenDetail}
        onRegisterEvent={handleOpenRegister}
      />

      {/* ACT 03 // Timeline Schedule */}
      <ScheduleSection />

      {/* ACT 03.1 // Keynote Speakers Showcase */}
      <SpeakersSection />

      {/* ACT 04 // 6-Photo Curated Exhibition */}
      <GallerySection />

      {/* ACT 05 // Sponsors Wall */}
      <SponsorsSection />

      {/* ACT 06 // Campus Coordinates & FAQs */}
      <ContactSection />

      {/* Closer // Monolithic Footer */}
      <Footer onRegisterClick={() => handleOpenRegister('hackathon')} />

      {/* Event Details Drawer Modal */}
      <EventDetailModal
        event={selectedEvent}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onRegister={handleOpenRegister}
      />

      {/* Category-Specific Dynamic Registration Modal & Pass Generator */}
      <RegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        initialEventId={targetRegisterEventId}
      />
    </main>
  );
}
