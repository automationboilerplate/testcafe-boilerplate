import HomePage from '../pages/HomePage'
import SignUpPage from '../pages/SignUpPage'
import { RequestLogger, RequestMock } from 'testcafe';
const homePage = new HomePage();
const signupPage = new SignUpPage();

const mock = RequestMock()
  .onRequestTo('http://remote-api.com/api/customers/1')
  .respond({
    id: 1,
    name: "John Doe"
  }, 200, {'Access-Control-Allow-Origin': '*'});


fixture `Sign-up Users for mail.com`
    .page `https://www.mail.com/`;

    test('with valid User details', async t => {
        await t 
            .click(homePage.btnSignUp)

        await signupPage.setSignUpDetails()
    })