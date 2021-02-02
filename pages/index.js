import { useState } from 'react';
import styled from 'styled-components';

import Input from '../components/Input';

const Wrapper = styled.div`
  margin: auto;
  width: 300px;
`;

const Home = () => {
  const [value, setValue] = useState('');
  const [errorMsg, setErrMsg] = useState(null);
  const handleFoucs = () => setErrMsg(null);
  const handleBlur = () => {
    if (!value) setErrMsg('forgot_password_error_empty');
  };

  return (
    <Wrapper>
      <Input
        id="inputId"
        value={value}
        onFocus={handleFoucs}
        onBlur={handleBlur}
        helperText={errorMsg}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default Home;
