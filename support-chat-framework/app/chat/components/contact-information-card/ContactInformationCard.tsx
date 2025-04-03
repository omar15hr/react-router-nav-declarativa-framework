import { ContactInformation } from "./ContactInformation";
import { ContactInformationSkeleton } from "./ContactInformationSkeleton";
import { NoContactSelected } from "./NoContactSelected";

export const ContactInformationCard = () => {
  // return <ContactInformationSkeleton />
  return <NoContactSelected />
  return <ContactInformation />;
};
