import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

