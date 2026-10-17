import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import TrustBanner from "@/components/TrustBanner";
import ProductCatalog from "@/components/ProductCatalog";
import MissionSection from "@/components/MissionSection";
import CustomerReviews from "@/components/CustomerReviews";
import BlogSection from "@/components/BlogSection";
import LivePurchaseToast from "@/components/LivePurchaseToast";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-accent font-sans">
      <HeroBanner />
      <LivePurchaseToast />
      <CategoryGrid />
      <TrustBanner />
      <ProductCatalog />
      <MissionSection />
      <CustomerReviews />
      <BlogSection />
    </div>
  );
}
