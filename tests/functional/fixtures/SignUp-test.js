fixture `Sign-up Users for mail.com`
    .page `https://www.mail.com/`;

    const homePage = new HomePage();
    const signupPage = new SignUpPage();

    test('with valid User details', async t => {
        await t 
            .click(homePage.signupPage)
    })