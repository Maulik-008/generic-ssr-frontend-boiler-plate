// Common utility types
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type NonEmptyArray<T> = [T, ...T[]];

// React component types
export type ComponentProps<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T];

export type PropsWithClassName<T = {}> = T & {
  className?: string;
};

export type PropsWithChildren<T = {}> = T & {
  children?: React.ReactNode;
};

// API response types
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  code?: string | number;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
}

export interface FormState {
  isSubmitting: boolean;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavItem[];
  external?: boolean;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Status types
export type Status = 'idle' | 'loading' | 'success' | 'error';

// Common entity types
export interface BaseEntity {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
}

// SEO types
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// Layout types
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  seo?: SEOProps;
}

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// Toast types
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

// Search types
export interface SearchParams {
  query?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  filters?: Record<string, any>;
}

// File upload types
export interface FileUpload {
  file: File;
  progress: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  error?: string;
  url?: string;
}

// Environment types
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_APP_URL: string;
  NEXT_PUBLIC_API_URL: string;
}

// Utility types for Next.js
export type PageProps<T = {}> = T & {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
};

export type LayoutPageProps<T = {}> = T & {
  children: React.ReactNode;
  params: Record<string, string>;
};

// Generic async state
export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Color variants for components
export type ColorVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

// Size variants for components
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Common component variants
export interface VariantProps {
  variant?: ColorVariant;
  size?: SizeVariant;
}