import React from 'react';
import AppImage from './ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { IProjectProps } from '@/types/type';

const Project = ({ project }: IProjectProps) => {
  return (
    <div
      className="w-[350px] sm:w-[500px] reveal-item scroll-reveal-hidden md:col-span-2 lg:col-span-2 group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
      style={{ transitionDelay: '0ms' }}
    >
      <div className="relative h-56 md:h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 500px) 100vw, 66vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute top-4 right-4 text-xs text-white/60 font-mono">{project.year}</div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.github}
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
