import React, { Component } from "react";
import { Modal, StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView, Image } from "react-native";
import styled from 'styled-components/native';
import {colors} from '../Theme';
import Stamp from '../components/Stamp';
import {Images} from '../images/Images';
import constants from '../utils/constants';

{/*
const Stamp = styled.Image`
    width: 60px;
    height: 60px;
    border-width: 1px;
    border-color: ${colors.black};
    background-color: ${colors.grey};
    margin-right: 5px;
`; */}

class ModalStamp extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  constructor() {
    super();
    this.state = {
      img: Images.E.uri,
    };
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          /*onRequestClose: 뒤로 가기 클릭 시 모달 사라짐*/
          onRequestClose = {() => {this.setModalVisible(!modalVisible)}}
        >
            {/*Touchable Opacity: 바깥 클릭 시 모달 사라짐*/}
            <TouchableOpacity style={styles.view} activeOpacity={1} onPressOut={() => {this.setModalVisible(false)}}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>나의 우표 보관함</Text>
                    <View style={styles.stampView}>
                        <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
                          <Pressable onPress={this.changeImage1}>
                            <Stamp imageUri = {Images.E.uri}/>
                          </Pressable>
                          <Pressable onPress={this.changeImage2}>
                            <Stamp imageUri = {Images.W.uri}/>
                          </Pressable>
                          <Pressable onPress={this.changeImage3}>
                            <Stamp imageUri = {Images.H.uri}/>
                          </Pressable>
                          <Pressable onPress={this.changeImage4}>
                            <Stamp imageUri = {Images.A.uri}/>
                          </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
        <TouchableOpacity onPress={() => {this.setModalVisible(true);}} activeOpacity = {0.5}>
            <Stamp imageUri = {this.state.img}/>
        </TouchableOpacity>
      </View>
    );
  }
  changeImage1 = () => {
    this.setState({img:Images.E.uri});
  }
  changeImage2 = () => {
    this.setState({img:Images.W.uri});
  }
  changeImage3 = () => {
    this.setState({img:Images.H.uri});
  }
  changeImage4 = () => {
    this.setState({img:Images.A.uri});
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    marginTop: constants.height*2/3,
    backgroundColor: colors.beige,
    padding: 50,
    alignItems: "center",
    width: constants.width,
    height: constants.height/3,
    borderTopWidth: 1,
  },
  stampView: {
      flexDirection: "row",
      justifyContent: "center",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
  }
});

export default ModalStamp; 