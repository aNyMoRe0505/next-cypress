import { useState } from 'react';
import styled from 'styled-components';

import { useTranslation } from '../services/I18Next';
import Input from '../components/Input';

const Wrapper = styled.div`
  margin: auto;
  width: 300px;
`;

const Home = () => {
  const { t } = useTranslation('common');

  const [value, setValue] = useState('');
  const [errorMsg, setErrMsg] = useState(null);
  const handleFoucs = () => setErrMsg(null);
  const handleBlur = () => {
    if (!value) setErrMsg('test');
  };

  return (
    <Wrapper>
      <Input
        id="inputId"
        value={value}
        onFocus={handleFoucs}
        onBlur={handleBlur}
        helperText={t(errorMsg)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Wrapper>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Home;
