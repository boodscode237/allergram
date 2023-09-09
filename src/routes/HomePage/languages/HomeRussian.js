import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HomeRussian() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 4 }}>
        <div>
          <Typography
            variant="h6"
            component="h2"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Как работает наш сервис:
          </Typography>
        </div>

        <div>
          <Typography
            variant="body1"
            // color="primary"
            align="center"
            gutterBottom
          >
            Расскажите нам о ваших аллергиях/непереносимостях: Сначала
            расскажите нам, на какие продукты у вас аллергия/непереносимость.
            Это важно, чтобы мы могли вам помочь.{" "}
            <b>
              желательно показать форму заполнения списка аллергенов с
              заполненным образцом.{" "}
            </b>
          </Typography>
        </div>
        <div>
          <Typography
            variant="body1"
            // color="primary"
            align="center"
            gutterBottom
          >
            Сфотографируйте продукт: Когда вы пойдете в магазин или будете
            сидеть в ресторане, и у вас появятся подозрения насчет какого-либо
            продукта, просто сфотографируйте состав на его упаковке или в меню.{" "}
            <b>тоже показать пример с фото состава из нашей формы.</b>
          </Typography>
        </div>
        <div>
          <Typography
            variant="body1"
            // color="primary"
            align="center"
            gutterBottom
          >
            Получите рекомендацию: Мы быстро проанализируем фотографию и скажем
            вам есть риск аллергической реакции/непереносимости. Если продукт
            небезопасен, мы вас об этом уведомим!{" "}
            <b>тут обязательно пример выдачи результата.</b>{" "}
          </Typography>
        </div>
        <div>
          <Typography
            variant="body1"
            // color="primary"
            align="center"
            gutterBottom
          >
            Принимайте правильное решение: И, наконец, на основе нашей
            рекомендации, вы сами решаете, есть этот продукт или нет. Мы здесь,
            чтобы помочь вам делать более информированные выборы. Это просто!
            Зарегистрируйтесь и сделайте свою жизнь безопаснее уже сейчас:
          </Typography>
          <Typography style={{ marginTop: 5, color:"#c25364" }} variant="button" display="block">
            <b>ссылка на форму регистрации</b>
          </Typography>
        </div>
      </Grid>
    </div>
  );
}

export default HomeRussian;
