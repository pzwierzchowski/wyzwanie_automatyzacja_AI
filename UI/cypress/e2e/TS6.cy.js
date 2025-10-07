import AccountPage from '../page-objects/myAccountPage'
import HomePage from "../page-objects/homePage";


describe('my login scenario', () => {
  const accountPage = new AccountPage();
  const homePage = new HomePage();

  it('should login to the app', function(){
    homePage.visitPage('v. 2.1.7 2025');
    accountPage.visitPage();
    accountPage.fillUsernameFieldWithEmail('cotaga1249@maillei.net');
    accountPage.fillPasswordField('VRrMhK8MqFyd');
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfMyAccountNavigation()
  })
})
