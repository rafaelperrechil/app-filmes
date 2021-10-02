import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #ad0a0f;
  flex:1;
  padding: 5px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding:10px 15px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 88%;
  border-radius: 20px;
  padding: 10px 20px;
  height: 50px;
`;

export const SearchButton = styled.TouchableOpacity`
  width:12%;
  justify-content: center;
  align-items: flex-end;
  height: 50px;
`;

export const Title = styled.Text`
  color: #FFF;
  margin: 0 15px;
  font-weight: bold;
  font-size: 24px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
  height:150px;
  border-radius: 5px;
  margin: 0 15px 8px 15px;
`;

export const BannerTitle = styled.Text`
  color: #FFF;
  font-size: 14px;
  padding: 0 15px 15px 15px;
`;
export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 15px;
`;
export const LoadingContent = styled.View`
  background-color: #ad0a0f;
  flex: 1;
  justify-content: center;
`;