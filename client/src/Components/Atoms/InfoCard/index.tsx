import { Container } from "./styles";

interface Props {
  Element: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string[];
}
const InfoCard = ({ Element, text }: Props) => {
  return (
    <Container>
      <Element />
      <p style={{ marginTop: "10px" }}>{text[0]}</p>
      <p>{text[1]}</p>
    </Container>
  );
};

export default InfoCard;
