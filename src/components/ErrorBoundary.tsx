import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0B0C0E] flex items-center justify-center p-4 text-gray-900 dark:text-white">
          <div className="max-w-md w-full bg-white dark:bg-[#16181D] border border-gray-200 dark:border-white/10 rounded-3xl p-8 text-center shadow-xl space-y-6">
            <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
              <AlertOctagon className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">Something went wrong</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                An unexpected error occurred. You can reload the page or return to the homepage.
              </p>
            </div>

            {this.state.error?.message && (
              <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-3 text-xs font-mono text-red-500 dark:text-red-400 truncate text-start">
                {this.state.error.message}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={this.handleReload}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Reload
              </button>
              <button
                onClick={this.handleReset}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                <Home className="w-4 h-4" />
                Homepage
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

