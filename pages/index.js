import { useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styled from "styled-components";

const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 12px;
  background-color: var(--white-color);
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  width: 1047px;
  height: 961px;
`;
const DontHaveAn = styled.span``;
const B = styled.b`
  color: var(--secondary-1);
`;
const RegisterHere1 = styled.span`
  text-decoration: underline;
`;
const DontHaveAnContainer = styled.div`
  position: absolute;
  top: 528px;
  left: 242px;
`;
const Login = styled.h1`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 346px;
  font-size: var(--heading-1-bold-48-size);
  line-height: 110%;
  font-weight: 700;
  font-family: var(--body-light-regular-18);
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #04072f;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;
const LoginId = styled.div`
  position: absolute;
  top: 93px;
  left: 0px;
  font-size: var(--body-light-regular-18-size);
  line-height: 110%;
  font-weight: 500;
  font-family: var(--body-light-regular-18);
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #04072f;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
`;
const Password = styled.div`
  position: absolute;
  top: 217px;
  left: 0px;
  font-size: var(--body-light-regular-18-size);
  line-height: 110%;
  font-weight: 500;
  font-family: var(--body-light-regular-18);
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #04072f;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
`;
const ChangePassword = styled.div`
  position: absolute;
  top: 329px;
  left: 660px;
  font-size: var(--body-light-regular-18-size);
  line-height: 110%;
  font-family: var(--body-light-regular-18);
  color: var(--secondary-1);
  text-align: right;
`;
const GroupItem = styled.input`
  border: 1px solid rgba(4, 7, 47, 0.4);
  background-color: transparent;
  position: absolute;
  top: 129px;
  left: 0px;
  border-radius: var(--br-5xs);
  box-sizing: border-box;
  width: 824px;
  height: 56px;
`;
const GroupInner = styled(TextField)`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 253px;
  left: 0px;
`;
const EnterLoginId = styled.div`
  position: absolute;
  top: 147px;
  left: 16px;
  font-size: var(--body-light-regular-18-size);
  line-height: 110%;
  font-family: var(--body-light-regular-18);
  color: var(--light-color-1);
  text-align: left;
`;
const EnterPassword = styled.div`
  position: absolute;
  top: 271px;
  left: 16px;
  font-size: var(--body-light-regular-18-size);
  line-height: 110%;
  font-family: var(--body-light-regular-18);
  color: var(--light-color-1);
  text-align: left;
`;
const RectangleButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--primary-1);
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-5xs);
  width: 538px;
  height: 56px;
`;
const Login1 = styled.div`
  position: absolute;
  top: 18px;
  left: 244px;
  font-size: var(--body-light-regular-18-size);
  line-height: 110%;
  font-weight: 500;
  font-family: var(--body-light-regular-18);
  color: var(--white-color);
  text-align: left;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 432px;
  left: 143px;
  width: 538px;
  height: 56px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 269px;
  left: 784px;
  width: 24px;
  height: 24px;
`;
const RememberMe = styled.input`
  border: none;
  font-family: var(--body-light-regular-18);
  font-size: var(--body-light-regular-18-size);
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 24px;
  line-height: 110%;
  color: var(--light-color-1);
  text-align: left;
`;
const RectangleInput = styled.input`
  position: absolute;
  top: 2px;
  left: 0px;
  border-radius: var(--br-9xs);
  border: 1px solid var(--light-color-1);
  box-sizing: border-box;
  width: 16px;
  height: 16px;
`;
const RememberMeParent = styled.div`
  position: absolute;
  top: 329px;
  left: 0px;
  width: 156px;
  height: 20px;
`;
const AgreeTo = styled.span`
  color: var(--light-color-1);
`;
const TermsConditions = styled.span`
  text-decoration: underline;
  color: var(--secondary-1);
`;
const AgreeToTermsContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 24px;
  font-size: var(--body-light-regular-18-size);
  font-family: var(--body-light-regular-18);
  text-align: left;
`;
const GroupChild1 = styled.input`
  position: absolute;
  top: 6px;
  left: 0px;
  border-radius: var(--br-9xs);
  border: 1px solid var(--light-color-1);
  box-sizing: border-box;
  width: 16px;
  height: 16px;
`;
const AgreeToTermsConditionsParent = styled.div`
  position: absolute;
  top: 365px;
  left: 0px;
  width: 281px;
  height: 27px;
`;
const LoginParent = styled.form`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 824px;
  height: 488px;
`;
const DontHaveAnAccountRegisteParent = styled.div`
  position: absolute;
  top: 203px;
  left: 111px;
  width: 824px;
  height: 555px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 40px;
  left: 833px;
  width: 1047px;
  height: 961px;
`;
const LoginPageChild = styled.img`
  position: absolute;
  top: 203px;
  left: 142px;
  width: 543.2px;
  height: 633.6px;
`;
const LoginPageRoot = styled.div`
  position: relative;
  background-color: var(--white-color);
  width: 100%;
  height: 1041px;
  overflow: hidden;
  text-align: left;
  font-size: var(--body-light-regular-18-size);
  color: #04072f;
  font-family: var(--body-light-regular-18);
`;

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LoginPageRoot>
      <RectangleParent>
        <GroupChild />
        <DontHaveAnAccountRegisteParent>
          <DontHaveAnContainer>
            <DontHaveAn>
              <DontHaveAn>Don’t have an account?</DontHaveAn>
              <B>{` `}</B>
            </DontHaveAn>
            <B>
              <RegisterHere1>Register Here</RegisterHere1>
            </B>
          </DontHaveAnContainer>
          <LoginParent>
            <Login>Login</Login>
            <LoginId>Login ID</LoginId>
            <Password>Password</Password>
            <ChangePassword>Change Password</ChangePassword>
            <GroupItem placeholder="Enter Login ID" type="email" />
            <GroupInner
              color="primary"
              placeholder="Enter Password"
              required={true}
              sx={{ width: 824 }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleShowPasswordClick}
                      aria-label="toggle password visibility"
                    >
                      <Icon>
                        {showPassword ? "visibility_off" : "visibility"}
                      </Icon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <EnterLoginId></EnterLoginId>
            <EnterPassword></EnterPassword>
            <RectangleGroup>
              <RectangleButton />
              <Login1>Login</Login1>
            </RectangleGroup>
            <RememberMeParent>
              <RememberMe placeholder="Remember Me" type="text" />
              <RectangleInput type="checkbox" />
            </RememberMeParent>
            <AgreeToTermsConditionsParent>
              <AgreeToTermsContainer>
                <AgreeTo>{`Agree to `}</AgreeTo>
                <TermsConditions>{`Terms & Conditions`}</TermsConditions>
              </AgreeToTermsContainer>
              <GroupChild1 type="checkbox" />
            </AgreeToTermsConditionsParent>
          </LoginParent>
        </DontHaveAnAccountRegisteParent>
      </RectangleParent>
      <LoginPageChild alt="" src="/group-3608.svg" />
    </LoginPageRoot>
  );
};

export default LoginPage;
