const iosLoginScreen = function() {

    /**
     * Meta
     */

     
    this.screenName = 'Login';


    /**
     * Variables
     * 
     */

    this.providerUsername = 'TAD-mp.provider1';
    this.providerPassword = 'TAD-mp.provider1';

    /**
     * Screen Objects
     */

    this.background = '~Sign In Background'; //accessibilityId
    this.loginButton = '~Sign In'; //accessibilityId
    this.usernameInput = '//XCUIElementTypeTextField[@value="Username"]'; //xpath
    this.passwordInput = '//XCUIElementTypeSecureTextField[@value="Password"]'; //xpath
    this.dontHaveAccountLink = `~Don't have an account?`; //accessibilityId
    this.termsAndConditionsLink = '~Terms and Conditions'; //accessibilityId
};

module.exports = new iosLoginScreen();