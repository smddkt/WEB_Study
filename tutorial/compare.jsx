//styled_components로 한 거

const StyledButton = styled.buton`
    color: ${props => props.primary ? "white" : "palevioletred"};
    background-color: ${props => props.primary ? "palevioletred" : "white"};
`;

const DynamicDiv = styled.div`
    color: ${props => props.color};`;

function App() {
    return (
        <DynamicDiv color = "hotpink">This is hotpink</DynamicDiv>
    );
}

//mui로 한 거

const CustomButton = styled(Button)(({ theme, primary }) => ({
    color: primary ? 'white' : 'palevioiletred',
    backgroundcolor: primary ? 'palevioliletred' : 'white',
}));

function App() {
    return (
        <div>
            <CustomButton primary>Primary Button </CustomButton>
            <CustomButton>Secondary Button</CustomButton>
        </div>
    );
}

export default App;


//Tailwind CSS

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Traditional CSS Example</title>
  </head>
  <body>
  <button class="text-white bg-pink-300">Primary Button</button>
  <button class="text-pink-300 bg-white">Secondary Button</button>
</body>
</html>



//전통적인 CSS

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Traditional CSS Example</title>
  <style>
    .custom-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .custom-btn-primary {
      color: white;
      background-color: palevioletred;
    }
    .custom-btn-secondary {
      color: palevioletred;
      background-color: white;
    }
  </style>
  </head>
<body>
  <button class="custom-btn custom-btn-primary">Primary Button</button>
  <button class="custom-btn custom-btn-secondary">Secondary Button</button>
</body>
</html>