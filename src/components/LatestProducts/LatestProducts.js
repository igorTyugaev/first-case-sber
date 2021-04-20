import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import styles from "assets/jss/material-kit-react/views/editProfile.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import classNames from "classnames";
import List from "@material-ui/core/List";


import {v4 as uuid} from 'uuid';
import moment from 'moment';
import {
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import profile from "../../assets/img/faces/christian.jpg";
import RecipeReviewCard from "../RecipeReviewCard/RecipeReviewCard";
import Button from "../CustomButtons/Button";

const products = [
    {
        id: uuid(),
        name: 'Многопоточный парсер данных',
        imageUrl: {profile},
        updatedAt:
            "Парсер позволяет собирать: ссылки, населенный пункт, заголовок, описание, имя продавца и стоимость. Собираются данные организаций и юридических лиц. \n" +
            "Для многопоточной работы программы необходимо отдельно приобрести прокси: IP4 прокси (https или socks) \n" +
            "Для разгадывания капчи нужен ключ от сервиса распознавания. Поддерживается Рукапча."
    },
    {
        id: uuid(),
        name: 'Medium Corporation',
        imageUrl: "../../assets/img/faces/christian.jpg",
        updatedAt: "moment().subtract(2, 'hours')"
    },
    {
        id: uuid(),
        name: 'Slack',
        imageUrl: '/static/images/products/product_3.png',
        updatedAt: "moment().subtract(3, 'hours')"
    },
    {
        id: uuid(),
        name: 'Lyft',
        imageUrl: '/static/images/products/product_4.png',
        updatedAt: "moment().subtract(5, 'hours')"
    },
    {
        id: uuid(),
        name: 'GitHub',
        imageUrl: '/static/images/products/product_5.png',
        updatedAt: "moment().subtract(9, 'hours')"
    }
];


const dashboardRoutes = [];
const useStyles = makeStyles(styles);


export default function LatestProducts(props) {
    const classes = useStyles();
    const {...rest} = props;

    return (
        <GridItem xs={12} sm={12} md={8} className={classNames(classes.inner)}>
            <Card>
                <CardHeader color="success">
                    <h4 className={classes.cardTitleWhite}>Заказы</h4>
                    <p className={classes.cardCategoryWhite}>Выберите понравившийся заказ</p>
                </CardHeader>
                <List>
                    {products.map((product, i) => (
                        <ListItem
                            divider={i < products.length - 1}
                            key={product.id}>

                            {/*<ListItemAvatar>*/}
                            {/*    <img*/}
                            {/*        alt={product.name}*/}
                            {/*        // src={product.imageUrl}*/}
                            {/*        src={profile}*/}
                            {/*        style={{*/}
                            {/*            height: 48,*/}
                            {/*            width: 48*/}
                            {/*        }}*/}
                            {/*    />*/}
                            {/*</ListItemAvatar>*/}

                            <ListItemText
                                primary={product.name}
                                // secondary={`Updated ${product.updatedAt.fromNow()}`}
                                secondary={product.updatedAt}
                            />
                            <Button color="success">Откликнуться</Button>
                        </ListItem>
                    ))}
                </List>
            </Card>
        </GridItem>
    );
}

