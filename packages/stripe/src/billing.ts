import { stripe } from "./stripe.js";
import {config} from "@monorepo/config"


export const getBillingPortalByCustomerId = async ( customerId: string ) => {
  return await stripe.billingPortal.sessions.create(
    {
      customer: customerId,
      return_url: `${process.env.FRONTEND_URL}${config}`,
    }
  );

}
