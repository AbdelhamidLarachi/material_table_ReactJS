import React from 'react';
import ReactDOM from 'react-dom'
import { Link, Switch, Root } from 'react-router-dom';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { localhost, port } from './config';
import axios from 'axios';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Container } from 'reactstrap';
import DescriptionIcon from '@material-ui/icons/Description';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ErrorIcon from '@material-ui/icons/Error';
import { makeStyles } from '@material-ui/core/styles';



const tableIcons = {
  ErrorIcon: forwardRef((props, ref) => <ErrorIcon {...props} ref={ref} />),
  PictureAsPdfIcon: forwardRef((props, ref) => <PictureAsPdfIcon {...props} ref={ref} />),
  DescriptionIcon: forwardRef((props, ref) => <DescriptionIcon {...props} ref={ref} />),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />)
};



export default  function MaterialTableDemo() {


  const [state, setState] = React.useState({
    columns: [],
    data: [],
  });

  
if(state.data.length === 0){
    axios.get(`${localhost}:${port}/api/getOffres`).then((response) => {

    let data = response.data.data;

    data.forEach(element => {   // display only date from datetime
      element.date_parution = element.date_parution.substring(0, 10); 
      element.date_limite = element.date_limite.substring(0, 10);
      element.numero = element.titre.substring(element.titre.length - 10, element.titre.length);
      if(element.infructueux == 1 ){element.infructueux = true; // disable document access action
      } else {element.infructueux = false;}
      if(element.type == 1 ){element.type = "Appels d'offres"; 
      } else {element.type = "Avis de consultation";}
    });

    const newMessageObj = { 
      
      columns: [
      { title: 'Numéro', field: 'numero', cellStyle: {borderColor: 'white' ,width: '100%', color: 'black', backgroundColor: '#EEE', height: 10, textAlign:'center', whiteSpace:'nowrap'}, editable: 'never'},
      { title: 'Type', field: 'type', lookup: { "Appels d'offres": "Appels d'offres", 'Avis de consultation': 'Avis de consultation'}},
      { title: 'Wilaya', field: 'wilaya', lookup: { 'Adrar': 'Adrar', 'Chlef': 'Chlef', 'Laghouat': 'Laghouat', 'Oum El Bouaghi': 'Oum El Bouaghi', 'Batna': 'Batna', 'Bejaia': 'Bejaia', 'Biskra': 'Biskra', 'Bechar': 'Bechar', 'Blida': 'Blida', 'Bouira': 'Bouira', 'Tamanrasset': 'Tamanrasset', 'Tebessa': 'Tebessa', 'Tlemcen': 'Tlemcen', 'Tiaret': 'Tiaret', 'Tizi Ouzou': 'Tizi Ouzou', 'Alger': 'Alger', 'Djelfa': 'Djelfa', 'Jijel': 'Jijel', 'Setif': 'Setif', 'Saida': 'Saida', 'Skikda': 'Skikda', 'Sidi Bel Abbes': 'Sidi Bel Abbes', 'Annaba': 'Annaba', 'Guelma': 'Guelma', 'Constantine': 'Constantine', 'Medea': 'Medea', 'Mostaganem': 'Mostaganem', 'Msila': 'Msila', 'Mascara': 'Mascara', 'Ouargla': 'Ouargla', 'Oran': 'Oran', 'El Bayadh': 'El Bayadh', 'Illizi': 'Illizi', 'Bordj Bou Arreridj': 'Bordj Bou Arreridj', 'Boumerdes': 'Boumerdes', 'El Tarf': 'El Tarf', 'Tindouf': 'Tindouf', 'Tissemsilt': 'Tissemsilt', 'El Oued': 'El Oued', 'Khenchela': 'Khenchela', 'Souk Ahras': 'Souk Ahras', 'Tipaza': 'Tipaza', 'Mila': 'Mila', 'Ain Defla': 'Ain Defla', 'Naama': 'Naama', 'Ain Temouchent': 'Ain Temouchent', 'Ghardaia': 'Ghardaia', 'Relizane': 'Relizane'}},
      { title: 'Parution', field: 'date_parution', type: 'date'},
      { title: 'Limite', field: 'date_limite', type: 'date'},
      { title: 'Infructueux', field: 'infructueux', type: 'boolean', cellStyle: {color: 'black', fontWeight: 'bold', height: 10, textAlign:'center', whiteSpace:'nowrap'}},
      { title: 'Url', field: 'url'},
      { title: 'Url_infructuosité', field: 'url_infructuosite'},
      { title: 'Titre', field: 'titre', cellStyle: {borderColor: 'white' ,width: '100%', color: 'black', height: 10, whiteSpace:'nowrap'}},
      { title: 'Déscription', field: 'description', cellStyle: {borderColor: 'white' ,width: '100%', color: 'black', height: 10, whiteSpace:'nowrap'}},

    ],data: data,
    
    detailPanel: [
    
        () => ({
        icon: () => <PictureAsPdfIcon style={{color: 'black'}} />,
        tooltip: 'Voir Document',
        render: rowData => {
          return (
            <iframe
            width="35%"
            height="600"
            src={rowData.url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          )
        },
     }),

     rowData => ({
      disabled: !rowData.infructueux,
      icon: () => <DescriptionIcon style={{color: 'black'}}/>,
      tooltip: 'Voir Infructuosité',
      render: rowData => {
        return (
          <iframe
          width="35%"
          height="600"
          src={rowData.url_infructuosite}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        )
      },
   }),

   // just a hack to give a margin between selection actions and detail panel which the library do not support
   () => ({
    disabled: true,
    icon: () => <ErrorIcon style={{color: 'white'}} />,
    render: () => <div></div>
 })

    ]

  }
    setState(newMessageObj); }
  });

  }


  console.log(state.data)



  return (
    
<Container maxWidth="sm" style={{margin: '4%'}}>

    <MaterialTable

    options={{
      headerStyle: {
        backgroundColor: '#EEE',
        color: 'black',
      },
      selection: true,
      exportButton: true,
      grouping: true,
      grouping: () => ({
        placeholder: 'test'
      }),

    }}

    localization={{  
      body: {
          emptyDataSourceMessage: 'Pas de données a afficher...',
          addTooltip: 'Ajouter offre',
          deleteTooltip: 'Supprimer',
          editTooltip: 'Modifier',
          editRow: {
            saveTooltip: 'Enregistrer',
            cancelTooltip: 'Annuler',
            deleteText: 'Supprimer'
          },
      },
      toolbar: {
        nRowsSelected: '{0} offre(s) selectionné',
        exportTitle: 'Exporter',
        searchTooltip: 'Rechercher',
        searchPlaceholder: 'Rechercher',
      },
      grouping: {
        groupedBy: 'Regroupé par :',
        placeholder: 'Faites glisser les en-têtes ici pour les regrouper par catégorie'
      }
  }}
    detailPanel={state.detailPanel}
    
    actions={[
      {
        tooltip: 'Voulez-vous les supprimer?',
        icon: () => <DeleteOutline />,
        onClick: (evt, data) => {

          axios.post(`${localhost}:${port}/api/deleteOffre`, { data: data });  // delete offre

          var prevData = state.data;
          prevData = prevData.filter(function(val) {
            return data.indexOf(val) == -1;
          });

        const newDataObj = { 
          columns: state.columns,
          data: prevData,
      }
        setState(newDataObj); 
        console.log(prevData)
        } 
      }
    ]}
    icons={tableIcons}
      title="Gestion d'appels d'offres"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            axios.post(`${localhost}:${port}/api/addOffre`, { form: newData });  // add offre
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            axios.post(`${localhost}:${port}/api/updateOffre`, { form: newData });  // update offre
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            let toArray = [];
            toArray.push(oldData);
            axios.post(`${localhost}:${port}/api/deleteOffre`, { data: toArray });  // delete offre
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </Container>
  );
}