import React, { Component } from "react";
import { Modal, StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollView, Image } from "react-native";
import styled from 'styled-components/native';
import {colors} from '../Theme';
import Stamp from '../components/Stamp';
import {Images} from '../images/Images';

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
                          <Stamp/><Stamp/><Stamp/><Stamp/><Stamp/>
                        </ScrollView>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
        <Pressable onPress={() => {this.setModalVisible(true);}}>
            <Stamp imageUri = {Images.logo.uri}/>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 50,
    backgroundColor: colors.beige,
    padding: 50,
    alignItems: "center",
    width: 375,
    borderTopWidth: 1,
  },
  stampView: {
      flexDirection: "row",
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