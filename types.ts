import { ReactNode } from 'react';

export interface SlideData {
  id: number;
  title?: string;
  content: ReactNode;
  layout?: 'center' | 'default' | 'split';
  bgImage?: string;
}

export interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}
