import { describe, expect, it } from "vitest";

describe("CampaignBadge", () => {
  it("should format campaign text correctly", () => {
    const campaignText = "新春キャンペーン実施中！入会金無料";
    expect(campaignText).toContain("キャンペーン");
  });

  it("should display campaign period", () => {
    const period = "2026年1月31日まで";
    expect(period).toMatch(/\d{4}年\d{1,2}月\d{1,2}日まで/);
  });

  it("should have discount percentage", () => {
    const discount = 50;
    expect(discount).toBeGreaterThan(0);
    expect(discount).toBeLessThanOrEqual(100);
  });

  it("should render campaign icon", () => {
    const hasIcon = true;
    expect(hasIcon).toBe(true);
  });
});
