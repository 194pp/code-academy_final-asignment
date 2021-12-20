import classes from './PageHeading.module.css';

const PageHeading = ({children}) => {
  return (
    <h1 className={classes.PageHeader}>
      {children}
    </h1>
  )
}

export default PageHeading;
