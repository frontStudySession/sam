import styled from 'styled-components';

const Preview = ({ text }: { text: string }) => {
  if (text) return <TextPreview>{text}</TextPreview>;
  return null;
};

const TextPreview = styled.div`
  padding: 6px 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

export default Preview;
