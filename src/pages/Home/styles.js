import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #141a29;
  flex:1;
  padding: 5px;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding:0 15px;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 85%;
  border-radius: 20px;
  padding: 10px 20px;
  height: 50px;
`;

export const SearchButton = styled.TouchableOpacity`
  width:15%;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const Title = styled.Text`
  color: #FFF;
  margin: 20px;
  font-weight: bold;
  font-size: 24px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
  height:150px;
  border-radius: 5px;
  margin: 0 15px;
`;

export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 15px;
`;