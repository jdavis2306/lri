// Make sure these start with forward slash '/' - indicates domain root
const ApiRoutes = {
  allMembers: "/api/all-members",
  allAccounts: "/api/all-accounts",
  registerAccount: "/api/register-account",
  registerPartner: "/api/register-partner",
  activeAccount: "/api/active-account",
  activeAccountUpdateLastLogin: "/api/active-account/update-last-login",
  account: (id: number) => "/api/account/" + id,
  publicMemberInfo: (id: number) => "/api/member/" + id + "/public",
  privateMemberInfo: (id: number) => "/api/member/" + id + "/private",
  deleteAccount: (id: number) => "/api/delete-account/" + id,
  updateAccountName: (id: number) => "/api/update-account/" + id + "/name",
  updateAccountEmail: (id: number) => "/api/update-account/" + id + "/email",
  updateAccountGrantAdmin: (id: number) => "/api/update-account/" + id + "/grant-admin",
  updateAccountRemoveAdmin: (id: number) => "/api/update-account/" + id + "/remove-admin",
  updateAccountRegisterMember: (id: number) => "/api/update-account/" + id + "/register-member",
  updateAccountDeleteMember: (id: number) => "/api/update-account/" + id + "/delete-member",
  updateMemberPublic: (id: number) => "/api/update-member/" + id + "/public",
  updateMemberPrivate: (id: number) => "/api/update-member/" + id + "/private",
  updateMemberInsight: (id: number) => "/api/update-member/" + id + "/insight",
  updateKeyword: (id: number) => "/api/update-keyword/" + id,
  registerKeyword: "/api/register-keyword",
  allKeywords: "/api/all-keywords",
  allFaculties: "/api/all-faculties",
  allMemberTypes: "/api/all-member-types",
  allOrgTypes: "/api/all-org-types",
  allOrgScopes: "/api/all-org-scopes",
} as const;

export default ApiRoutes;
