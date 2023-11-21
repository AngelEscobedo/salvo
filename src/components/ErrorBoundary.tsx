import React, { Component } from 'react';

interface ErrorBoundaryState {
 hasError: boolean;
}

export class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
 constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
 }

 static getDerivedStateFromError(error: any) {
    return { hasError: true };
 }

 componentDidCatch(error: any, errorInfo: any) {
    console.log('ErrorBoundary caught an error:', error, errorInfo);
 }

 render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props?.children;
 }
}