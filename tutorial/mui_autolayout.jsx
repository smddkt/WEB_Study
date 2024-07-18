<>
  <Grid container spacing={3}>
    <Grid item xs>
      <Item>xs</Item>
    </Grid>
    <Grid item xs={6}>
      <Item>xs=6</Item>
    </Grid>
    <Grid item xs>
      <Item>xs</Item>
    </Grid>
  </Grid>
  // Auto-layout은 아이템들이 어떤 비율로 공간을 차지할 지 결정한다. //한
  아이템의 너비를 설정하면 다른 아이템들(여기서는 마지막 아이템)은 그거에 맞춰서
  자동적으로 크기가 재조정된다.
  <Grid container spacing={3}>
    <Grid item xs="auto">
      <Item>variable width content</Item>
    </Grid>
    <Grid item xs={6}>
      <Item>xs=6</Item>
    </Grid>
    <Grid item xs>
      <Item>xs</Item>
    </Grid>
  </Grid>
  //이러면 오토(콘텐츠의 크기에 따라 너비가 결정된다), //6(그리드 컨테이너의
  절반을 차지), //마지막 아이템은 첫 번째와 두 번째 아이템이 각각의 크기만큼
  공간을 차지하고 남는 모든 공간을 차지한다. //자동으로 균형잡힌 레이아웃을 만들
  수 있음.
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
  //Nested Grid, 중첩 그리드라는 건데. //하나의 컴포넌트는 컨테이너이면서
  아이템일 수 있다. //
  <Grid spacing={1} container item xs={12}>
    {" "}
  </Grid>
  근데 이런 식으로 두 가지 스페이싱을 동시에 하는 것은 불가능함.
  <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid item xs={8}>
      <Item>xs=8</Item>
    </Grid>
  </Grid>
  //그리드 컬럼의 기본값은 12이지만 column prop을 사용해서 너비를 총 몇 칸으로
  나눌지 다시 설정할 수 있다. //item 간의 간격을 정하는 것은 negative margin과
  함께 구현이 된다. //이것은 예상치 못한 결과를 낳을 수도 있다. 예를 들어서,
  background color를 적용하려고 할 때 display: flex 라는 것을 부모 요소에
  적용해야 한다. //white-space: nowrap이란 뭘까? // flex item의 초기 세팅 값은
  min-width: auto 이다. 이렇게 하면 white-space: nowrap(줄바꿈안하는 기능)을 쓸
  때 아이템이 컨테이너 밖까지 나가는 현상이 생길 수 있다. `
  <Grid item xs>
    <Typography noWrap />
  </Grid>
  <Grid item xs zeroMinWidth>
    <Typography noWrap />
    // 이렇게 하면 플렉스 아이템의 최소 너비가 0이 되어, 텍스트가 줄 바꿈 없이
    한 줄로 표시되더라도 컨테이너의 전체 너비를 벗어나지 않는다.
  </Grid>
  //direction: column | column - reverse // xs, sm, md, lg, xl props는 direction
  = "column" 이나 direction = "column-reverse" 컨테이너 안에서는 너비가 아니라
  높이에 영향을 미치게 된다. 열(column)로 정렬되어 있는 컨테이너에서는 이
  속성들을 사용하지 않는 게 좋다.
</>;
