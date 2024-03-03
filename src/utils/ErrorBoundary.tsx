import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View } from 'react-native';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackUI: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <View>
          {/* Display the fallback UI */}
          {this.props.fallbackUI}
        </View>
      );
    }

    // If no error, render children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
