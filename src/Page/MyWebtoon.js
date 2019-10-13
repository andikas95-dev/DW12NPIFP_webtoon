import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native'
import { Container, Text, Header, Left, Body, Right, Title, Button, Icon, CardItem } from 'native-base'

export default class MyWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                title: 'The Secret of Angel',
                episode: 40,
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                image: [{
                    id: 0,
                    title: 'Episode 1',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }, {
                    id: 1,
                    title: 'Episode 2',
                    date: '09-11-2022',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]

                }, {
                    id: 2,
                    title: 'Episode 3',
                    date: '04-12-2000',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }]
            }, {
                id: 2,
                title: 'Pasutri Gaje',
                episode: 50,
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                image: [{
                    id: 0,
                    title: 'Episode 1',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }, {
                    id: 1,
                    title: 'Episode 2',
                    date: '09-11-2022',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }, {
                    id: 2,
                    title: 'Episode 3',
                    date: '04-12-2000',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }]
            }, {
                id: 3,
                title: 'Young Mom',
                episode: 60,
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                image: [{
                    id: 0,
                    title: 'Episode 1',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }, {
                    id: 1,
                    title: 'Episode 2',
                    date: '09-11-2022',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }, {
                    id: 2,
                    title: 'Episode 3',
                    date: '04-12-2000',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                    image: [{
                        title: 'Cover',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    {
                        title: 'Intro',
                        date: '19-09-2010',
                        url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                    },
                    ]
                }]
            },]
        };
    }

    render() {
        return (
            <View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate('EditMyWebtoon', {
                            id: index,
                            title: item.title,
                            url: item.url,
                            image: item.image,
                            imageEpisode: item.image[index].image
                        })}>
                            <CardItem>
                                <Image source={{ uri: item.url }} style={style.ImageFlatListDetail} />
                                <Text style={style.title}>{item.title}</Text>
                                <Text style={style.titleText}>{item.episode} Episode</Text>
                            </CardItem>
                        </TouchableOpacity>

                    )}
                />
                <View style={style.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('CreateWebtoon')}
                        rounded
                        warning
                        style={{ height: 55 }}>
                        <Icon
                            name='plus'
                            type='Entypo'
                            style={{ fontSize: 24 }}
                        />
                    </Button>
                </View>
            </View >
        );
    }
}
const style = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        color: 'black'
    },
    ImageFlatListDetail: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 20
    },
    title: {
        alignSelf: 'flex-start',
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 10
    },
    titleText: {
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 16,
        marginLeft: 130
    },
    button: {
        position: 'absolute',
        height: 70,
        alignSelf: 'flex-end',
        marginTop: "160%",
        paddingRight: 20

    }
})