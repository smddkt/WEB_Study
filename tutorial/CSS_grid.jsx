<>

// mui로 grid 속성 주기
<Box display = 'grid' gridTemplateColumns = "repeat(12, 1fr)" gap = {2}>
    //grid로 배치할 건데 화면을 12개로 나누고 하나당 1프레임이라고 한다.
    <Box gridColumn = 'span 8'> 
        //이 박스 컴포넌트는 그리드의 12개 열 중 8 개 만큼의 너비를 차지한다. 
        <Item>xs=8</Item>
    </Box>

    <Box gridColumn = 'span 4'>
        <Item>xs=4</Item>
    </Box>
    <Box gridColumn="span 4">
        <Item>xs = 4</Item>
    </Box>
    <Box gridColumn = "span 8">
        <Item>xs=8</Item>
    </Box>
</Box>



//중첩 그리드

<Grid container spacing={1}>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
</Grid>
//<Grid container spacing={1}>라는 바깥쪽 그리드 안에 <Grid container item spacing={3}>라는 안쪽 그리드들이 중첩
</>