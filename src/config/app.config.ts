interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'WFM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user information', 'Manage team information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/3b0ced23-f2ff-4a43-9f2e-3e6170e5edd4',
};
