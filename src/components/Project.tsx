'use client';

import React, { useRef } from 'react';
import AppImage from './ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { IProjectProps } from '@/types/type';

const Project = ({ project }: IProjectProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="w-full sm:w-[500px] reveal-item reveal-scale scroll-reveal-hidden group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
    >
      <div className="card-spotlight absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

      <div className="relative h-56 md:h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 500px) 100vw, 66vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm text-xs text-white/80 font-mono">
          {project.year}
        </div>
      </div>

      <div className="relative z-20 p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
          >
            <Icon name="CodeBracketIcon" size={15} />
            GitHub
            <Icon
              name="ArrowTopRightOnSquareIcon"
              size={12}
              className="opacity-0 group-hover/link:opacity-100 transition-opacity"
            />
          </a>
          <span className="w-px h-4 bg-border" />
          <a
            href={project.demo}
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity group/link"
          >
            Live Demo
            <Icon
              name="ArrowTopRightOnSquareIcon"
              size={13}
              className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
