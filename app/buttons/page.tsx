import CustomButton from "../components/common/button";
import { BUTTON_VARIANTS } from "../constants/variants";

const page = () => {
  return (
    <section>
      <div className="flex items-center justify-around min-h-[calc(100vh-100px)]">
        <CustomButton
          variant={BUTTON_VARIANTS.PRIMARY}
          content={"Primary Button"}
        />
        <CustomButton
          variant={BUTTON_VARIANTS.SECONDARY}
          content={"Secondary Button"}
        />
        <CustomButton
          variant={BUTTON_VARIANTS.TERTIARY}
          content={"Tertiary Button"}
        />
      </div>
    </section>
  );
};

export default page;
