import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputInstance = styled.input``;

const HelperText = styled.span`
  color: red;
`;

const Input = ({
  id,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  helperText,
}) => {
  return (
    <InputWrapper className={className}>
      <InputInstance
        id={id}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: null,
  className: '',
  value: '',
  onFocus: () => {},
  onChange: () => {},
  onBlur: () => {},
  helperText: '',
};

export default Input;
