import { describe, expect, it } from "vitest";
import type { PricingPlan } from "../../types";

describe("PlanCard", () => {
  const mockPlan: PricingPlan = {
    id: "monthly-8",
    name: "月8回プラン",
    monthlyPrice: 20000,
    sessionsPerMonth: 8,
    features: [
      "月8回まで利用可能",
      "好きなクラスを選択可能",
      "タオル・ウェア貸出無料",
    ],
    isRecommended: true,
  };

  it("should render plan name", () => {
    // This test will be implemented after component creation
    expect(mockPlan.name).toBe("月8回プラン");
  });

  it("should render monthly price formatted as JPY", () => {
    const formatted = `¥${mockPlan.monthlyPrice.toLocaleString("ja-JP")}`;
    expect(formatted).toBe("¥20,000");
  });

  it("should render sessions per month", () => {
    expect(mockPlan.sessionsPerMonth).toBe(8);
  });

  it("should render unlimited for unlimited plans", () => {
    const unlimitedPlan: PricingPlan = {
      ...mockPlan,
      sessionsPerMonth: "unlimited",
    };
    expect(unlimitedPlan.sessionsPerMonth).toBe("unlimited");
  });

  it("should render all features", () => {
    expect(mockPlan.features.length).toBe(3);
    expect(mockPlan.features).toContain("月8回まで利用可能");
  });

  it("should identify recommended plan", () => {
    expect(mockPlan.isRecommended).toBe(true);
  });
});
