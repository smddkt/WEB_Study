//방법 1: ErrorBoundary를 사용하여 에러 처리
import React, { Component } from "react";
import dynamic from "next/dynamic";

// 동적 임포트
const MobileForgotID = dynamic(() => import("./components/MobileForgotID"), {
  loading: () => <p>Loading...</p>, // 로딩 상태를 처리
  ssr: false, // 필요에 따라 SSR 비활성화
});

// ErrorBoundary 컴포넌트
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 오류 기록
    console.error("Error caught in ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 오류가 발생하면 폴백 UI 렌더링
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

// 동적 컴포넌트를 ErrorBoundary로 감싸서 사용
const ForgotId = () => (
  <ErrorBoundary>
    <MobileForgotID />
  </ErrorBoundary>
);

export default ForgotId;

//방법 2: 동적 임포트 함수에서 직접 에러 처리

const MobileForgotID = dynamic(
  () =>
    import("./components/MobileForgotID").catch((error) => {
      console.error("Failed to load MobileForgotID:", error);
      return () => <p>Failed to load component</p>; // 기본 에러 UI
    }),
  {
    loading: () => <p>Loading...</p>, // 로딩 상태를 처리
  }
);
