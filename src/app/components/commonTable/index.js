/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
import React, {  useState, useEffect } from 'react';
import MultiSelect from 'react-multiselect-checkboxes';
import Confirm from '../../components/confirmModal/confirm';
// import Loader from '../loader';
// import DateTime from 'datatables.net-datetime';
import './index.scss';
// import { getUserList, getBlockUserDetail, getUnBlockUserDetail } from '../../utils/apiCalls';
// import Loader from '../../components/loader';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons/js/dataTables.buttons.min';
// import 'datatables.net-colreorderwithresize-npm/ColReorderWithResize';
import jsZip from 'jszip';
import 'datatables.net-buttons/js/buttons.html5.min';
import 'datatables.net-buttons/js/buttons.print.min';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
window.JSZip = jsZip;

const CommonTable = () => {
  // const [alertText, setAlertText] = useState('');
  // const [blockUserId, setBlockUserId] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const [columnsList, setColumnsList] = useState();
  // const [dataList, setDataList] = useState();
  // const [hideTable, setHideTable] = useState(false);
  const [showUserConfirmModal, setShowUserConfirmModal] = useState(false);
  // const [isShowLoader, setIsShowLoader] = useState(false);
  // const [hideColumnList, setHideColumnList] = useState([]);
  // const [selectedOptions, setSelectedOptions] = useState([]);
  // const [isShowHideOptions, setIsShowHideOptions] = useState(false);
  const [filteredColumnValues, setFilteredColumnValues] = useState([]);

  const options = [
    { label: 'Name', value: 'Name', id: 1, checked: true },
    { label: 'Position', value: 'Position', id: 2, checked: true },
    { label: 'Office', value: 'Office', id: 3, checked: true },
    { label: 'Extn', value: 'Extn', id: 4, checked: true },
    { label: 'Start date', value: 'Start date', id: 5, checked: true }
  ];
  const [selectedOptions, setSelectedOptions] = useState([{ label: 'All', value: '*' }, ...options]);
const columns = [
  { title: 'Name' },
  { title: 'Position' },
  { title: 'Office' },
  { title: 'Extn.' },
  { title: 'Start date' },
  { title: 'Salary' },
  { title: 'Actions' }
];
var dataSet = [
  [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800' ],
  [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750' ],
  [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000' ],
  [ 'Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060' ],
  [ 'Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700' ],
  [ 'Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000' ],
  [ 'Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500' ],
  [ 'Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900' ],
  [ 'Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500' ],
  [ 'Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600' ],
  [ 'Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560' ],
  [ 'Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000' ],
  [ 'Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600' ],
  [ 'Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500' ],
  [ 'Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750' ],
  [ 'Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500' ],
  [ 'Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000' ],
  [ 'Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500' ],
  [ 'Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000' ],
  [ 'Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500' ],
  [ 'Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000' ],
  [ 'Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000' ],
  [ 'Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450' ],
  [ 'Doris Wilder', 'Sales Assistant', 'Sydney', '3023', '2010/09/20', '$85,600' ],
  [ 'Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '5797', '2009/10/09', '$1,200,000' ],
  [ 'Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575' ],
  [ 'Jennifer Chang', 'Regional Director', 'Singapore', '9239', '2010/11/14', '$357,650' ],
  [ 'Brenden Wagner', 'Software Engineer', 'San Francisco', '1314', '2011/06/07', '$206,850' ],
  [ 'Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '2947', '2010/03/11', '$850,000' ],
  [ 'Shou Itou', 'Regional Marketing', 'Tokyo', '8899', '2011/08/14', '$163,000' ],
  [ 'Michelle House', 'Integration Specialist', 'Sydney', '2769', '2011/06/02', '$95,400' ],
  [ 'Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500' ],
  [ 'Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000' ],
  [ 'Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500' ],
  [ 'Martena Mccray', 'Post-Sales support', 'Edinburgh', '8240', '2011/03/09', '$324,050' ],
  [ 'Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675' ]
];

  useEffect(() => {
      $(document).ready(function () {
        if ($.fn.dataTable.isDataTable('#data-table')) {
          $('#data-table').DataTable().columns().visible(true);
          $('#data-table').DataTable().destroy();
          $('#data-table').empty();
        }
        var table = $('#data-table')
          .DataTable({
            bRetrieve: true,
            data: dataSet,
            columns:columns, 
            paging: true,
            responsive: true,
            ordering: true,
            buttons: [
              {
                extend: 'collection', text: '', className: 'common-table__export-btn',
                buttons: [
                  {
                    extend: 'csv', className: 'common-table__export-btn--options',
                    exportOptions: { columns: [0, 'thead th:not(.noExport)'] }
                  },
                  {
                    extend: 'excel', className: 'common-table__export-btn--options',
                    exportOptions: { columns: [0, 'thead th:not(.noExport)'] }
                  },
                  {
                    extend: 'pdf', className: 'common-table__export-btn--options',
                    exportOptions: { columns: [0, 'thead th:not(.noExport)'] }
                  }
                ],
              },
            ],
            columnDefs: [
              {
                data: null,
                sortable: false,
                orderable: false,
                render: function (data, type, row, meta) {
                  var splitRowObject = data.id;
                  var userStatus = data.userStatus;
                  return '<div class="common-table__dots-parent"><button class="fa fa-ellipsis-v common-table__dots" type="button" data-toggle ="' + userStatus + '" data-target="' + meta.row + '"></button><div class="table-menu table-menu__left"   id="' + meta.row + '"><button id="' + splitRowObject + '" type="button" class="table-menu__item">Block User</button><button id="' + splitRowObject + '" type="button"  class="table-menu__modal">UnBlock User</button><div class="table-menu__arrow-right"></div></div></div>'
                },
                targets: [-1]
              }
            ],
            stateSave: true,
            oLanguage: { sProcessing: '<div class="loader" ></div>' },
            'bPaginate': true,
            'bFilter': true,
            'bJQueryUI': true,
            'bLengthChange': true,
            'bStateSave': true,
            'bDeferRender': true,
            'bAutoWidth': true,
            order: [[1, 'asc']],
            dom: 'ifrtlpB'
          });

        handleResetColumns(false);
        toggleAllColumns(options, true, false);

        $(window).on('click', function () {
          $('.table-menu').hide();
        });

        $('#data-table tbody').on('click', '.common-table__dots', function (e) {
          e.stopPropagation();
          var btnId = $(this).attr('data-target');
          var userStatus = $(this).attr('data-toggle');
          var popUpId = '#' + btnId;
          if ($(popUpId).css('display') == 'none') {
            $('.table-menu').hide();
          }
          if (popUpId) {
            $(popUpId).toggle();
          }
          if (userStatus === 'active') {
            $('.table-menu').removeClass('table-menu__left-unblock');
            $('.table-menu__modal').hide();
            $('.table-menu__item').show();
            $('.table-menu').addClass('table-menu__left');
          } else if (userStatus === 'block') {
            $('.table-menu').removeClass('table-menu__left');
            $('.table-menu__item').hide();
            $('.table-menu__modal').show();
            $('.table-menu').addClass('table-menu__left-unblock');
          }
        });

        $('#data-table tbody').on('click', '.table-menu__item', function () {
          setShowUserConfirmModal(true);
          var Id = $(this).attr('id');
          setBlockUserId(Id);
        });

        $('#data-table tbody').on('click', '.table-menu__modal', function () {
          var userId = $(this).attr('id');
          if (userId) {
            handleUnblokUser(userId);
          }
        });
        
        // date range filter
        var fromDate, toDate, fromUpdatedDate, toUpdatedDate;
        fromDate = new DateTime($('#min'), {
          format: 'YYYY-MM-DD'
        });
        toDate = new DateTime($('#max'), {
          format: 'YYYY-MM-DD'
        });

        fromUpdatedDate = new DateTime($('#min_updated'), {
          format: 'YYYY-MM-DD'
        });
        toUpdatedDate = new DateTime($('#max_updated'), {
          format: 'YYYY-MM-DD'
        });

        // handleFilterDateRange(fromDate, toDate, fromUpdatedDate, toUpdatedDate);

        // Refilter the table
        $('#min, #max').on('change', function () {
           
          fromUpdatedDate.s.display = null;
          toUpdatedDate.s.display = null;
          table.draw();
        });

        $('#min_updated, #max_updated').on('change', function () {
          fromDate.s.display = null;
          toDate.s.display = null;
          table.draw();
        });

        $('#from_date').click(function () {
          document.getElementById('from_date') ? document.getElementById('from_date').style.display = 'none' : null;
          document.getElementById('date_popup') ? document.getElementById('date_popup').style.display = 'flex' : null;
        });

        $('#clear_created_date').click(function () {
          fromDate.s.d = null;
          toDate.s.d = null;
          fromDate.s.display = null;
          toDate.s.display = null;
          document.getElementById('min').value = '';
          document.getElementById('max').value = '';
          fromUpdatedDate.s.display = fromUpdatedDate.s.d;
          toUpdatedDate.s.display = toUpdatedDate.s.d;
          handleFilterDateRange(fromDate, toDate, fromUpdatedDate, toUpdatedDate);
          document.getElementById('date_popup') ? document.getElementById('date_popup').style.display = 'none' : null;
          document.getElementById('from_date') ? document.getElementById('from_date').style.display = 'block' : null;
          $.fn.dataTable.ext.search.pop();
          table.draw();
        });

        $('#updated_date').click(function () {
          document.getElementById('updated_date') ? document.getElementById('updated_date').style.display = 'none' : null;
          document.getElementById('updated_date_popup') ? document.getElementById('updated_date_popup').style.display = 'flex' : null;
        });

        $('#clear_updated_date').click(function () {
          fromUpdatedDate.s.d = null;
          toUpdatedDate.s.d = null;
          fromUpdatedDate.s.display = null;
          toUpdatedDate.s.display = null;
          document.getElementById('min_updated').value = '';
          document.getElementById('max_updated').value = '';
          fromDate.s.display = fromDate.s.d;
          toDate.s.display = toDate.s.d;
          handleFilterDateRange(fromDate, toDate, fromUpdatedDate, toUpdatedDate);
          document.getElementById('updated_date_popup') ? document.getElementById('updated_date_popup').style.display = 'none' : null;
          document.getElementById('updated_date') ? document.getElementById('updated_date').style.display = 'block' : null;
          $.fn.dataTable.ext.search.pop();
          table.draw();
        });
        // date range filter ends

      });
      // setIsShowHideOptions(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleUnblokUser = (userId) => {
  //   let payload = {
  //     userId: userId
  //   }
  //   getUnBlockUserDetail((response) => {
  //     const { success, message } = response;
  //     if (success === true) {
  //       getData();
  //       setAlertText('User  has been Unblocked!');
  //       setShowConfirmModal(true);
  //     } else {
  //       setAlertText(message);
  //       setShowConfirmModal(true);
  //       $('.table-menu').hide();
  //     }
  //   }, payload);
  // }

  // const userBlockConfirmModal = () => {
  //   setShowUserConfirmModal(false);
  //   if (blockUserId) {
  //     let payload = {
  //       userId: blockUserId
  //     }
  //     getBlockUserDetail((response) => {
  //       const { success, message } = response;
  //       if (success === true) {
  //         getData();
  //         setAlertText('User has been Blocked!');
  //         setShowConfirmModal(true);
  //         $('.table-menu').hide();
  //       } else {
  //         setAlertText(message);
  //         setShowConfirmModal(true);
  //         $('.table-menu').hide();
  //       }
  //     }, payload);
  //   }
  // }
  
  const handleFilterDateRange = (fromDate, toDate, fromUpdatedDate, toUpdatedDate) => {
    $.fn.dataTable.ext.search.push(
      function (settings, data) {
        if (settings.nTable.id !== 'data-table') {
          return true;
        }
        var fromSearchdate = fromUpdatedDate.val();
        var toSearchdate = toUpdatedDate.val();
        var date = new Date(data[21]);
        var fromdate = fromDate.s.display ? fromDate.val() : (fromUpdatedDate.s.display ? fromSearchdate : null);
        var todate = toDate.s.display ? toDate.val() : (toUpdatedDate.s.display ? toSearchdate : null);
        if (fromUpdatedDate.s.display || toUpdatedDate.s.display) {
          date = new Date(data[22]);
        }
        if (fromdate || todate) {
          if ((fromdate === null && date?.valueOf() <= todate?.valueOf()) ||
            (fromdate?.valueOf() <= date?.valueOf() && todate === null) ||
            (fromdate?.valueOf() <= date?.valueOf() && date?.valueOf() <= todate?.valueOf())
          ) {
            return true;
          }
        } else if (fromdate === null && todate === null) {
          return true;
        }
        return false;
      }
    );
  }

  const getDropdownButtonLabel = ({ placeholderButtonLabel, value }) => {
     
    if (value && value.some((o) => o.value === '*')) {
      return `${placeholderButtonLabel}: All`;
    } else {
      const values = [];
      value.map((val, i) => {
        if (i < value.length - 1) {
          values.push(val.value);
          val.checked = false;
        }
      });
      values.splice(0, 0, value[value.length - 1]?.value);
      return `${placeholderButtonLabel}: ${values.join(',')}`;
    }
  };

  const handleResetColumns = (isFromToggleColumns) => {
    if (isFromToggleColumns) {
      $('#data-table').DataTable().columns().visible(true);
      $('#data-table thead tr:eq(1)').remove();
    }
    $('#data-table thead tr').clone(true).appendTo('#data-table thead');
    $('#data-table thead tr:eq(1) th').each(function (i) {
      var title = $(this).text();
      $(this).off('click.DT');
      $(this).removeAttr('aria-controls');
      $(this).removeAttr('aria-sort');
      $(this).removeClass(
        'context-menu sorting sorting_desc sorting_asc sorting:after sorting_asc:after'
      );
      if (title !== 'Actions') {
        if (title === 'CreatedAt') {
          $(this).html(
            '<button id="from_date">Select Range</button><div id="date_popup" style="display:flex" ><div ><span class="common-table__range"><label class="common-table__label">From Date:</label><input readOnly type="text" id="min" name="min" /></span><span class="common-table__range"><label class="common-table__label">To Date:</label><input readOnly type="text" id="max" name="max" /></span></div><i id="clear_created_date" class="fas fa-times overlay__cross-icon common-table__cross-btn" ></i></div>'
          );
        } else if (title === 'UpdatedAt') {
          $(this).html(
            '<button id="updated_date">Select Range</button><div id="updated_date_popup" style="display:flex" ><div><span class="common-table__range"><label class="common-table__label">From Date:</label><input readOnly type="text" id="min_updated" name="min_updated" /></span><span class="common-table__range"><label class="common-table__label">To Date:</label><input readOnly type="text" id="max_updated" name="max_updated" /></span></div><i id="clear_updated_date" class="fas fa-times overlay__cross-icon common-table__cross-btn" ></i></div>'
          );
        } else {
          $(this).html(
            '<input type="text" placeholder="Search ' + title + '" />'
          );
          $('input', this).on('keyup change', function () {
            if ($('#data-table').DataTable().column(i).search() !== this.value) {
              $('#data-table').DataTable().column(i).search(this.value).draw();
            }
          });
        }
        document.getElementById('date_popup') ? document.getElementById('date_popup').style.display = 'none' : null;
        document.getElementById('updated_date_popup') ? document.getElementById('updated_date_popup').style.display = 'none' : null;
      }
      else {
        $(this).html(
          <th ></th>
        );
      }
    });
    if (!isFromToggleColumns) {
      $('#data-table thead tr:eq(0) th').each(function (i) {
        if (i) {
          $(this).removeAttr('aria-controls');
          $(this).removeAttr('aria-sort');
          $(this).removeClass(
            'context-menu sorting sorting_desc sorting_asc sorting:after sorting_asc:after'
          );
        }
      });
    }
  }

  const toggleAllColumns = (value, isShowColumn, isHideSearch) => {
    if ($.fn.dataTable.isDataTable('#data-table')) {
      handleResetColumns(true);
    }
    let values = [];
    value.map((val) => {
      val.checked = false;
      var valId = val.id - 1;
      if ((val.label !== 'id') && (val.label !== 'MachineCategories')) {
        $('#data-table').dataTable().fnSetColumnVis(valId, isShowColumn);
        $('#data-table thead tr:eq(1) th').each(function (i) {
          if (i == valId) {
            if (isHideSearch) {
              $(this).hide();
              $(this).attr('hidden', true);
            } else {
              $(this).show();
              $(this).attr('hidden', false);
            }
          }
        });
        values.push(val);
      } else {
        $('#data-table').dataTable().fnSetColumnVis(valId, false);
        $('#data-table thead tr:eq(1) th').each(function (i) {
          if (i == valId) {
            $(this).hide();
            $(this).attr('hidden', true);
          }
        });
      }
    });
    if (values?.length !== 0) {
      setFilteredColumnValues(values);
      setSelectedOptions([
        { label: 'All', value: '*' },
        ...values,
      ]);
    }
  };

  const toggleColumn = (value, isShowColumn, isHideSearch) => {
    var valId = value.id - 1;
    $('#data-table').dataTable().fnSetColumnVis(valId, isShowColumn);
    $('#data-table thead tr:eq(1) th').each(function () {
      if ((value.label !== 'id') && (value.label !== 'MachineCategories')) {
        $('#data-table').dataTable().fnSetColumnVis(valId, isShowColumn);
        $('#data-table thead tr:eq(1) th').each(function (i) {
          if (i == valId) {
            if (isHideSearch) {
              $(this).hide();
              $(this).attr('hidden', true);
            } else {
              $(this).show();
              $(this).attr('hidden', false);
            }
          }
        });
      } else {
        $('#data-table').dataTable().fnSetColumnVis(valId, false);
        $('#data-table thead tr:eq(1) th').each(function (i) {
          if (i == valId) {
            $(this).hide();
            $(this).attr('hidden', true);
          }
        });
      }
    });
  };

  const onChange = (value, event) => {
    if (event.action === 'select-option' && event.option.value === '*') {
      toggleAllColumns(options, true, false);
      setSelectedOptions([{ label: 'All', value: '*' }, ...filteredColumnValues]);
    } else if (
      event.action === 'deselect-option' &&
      event.option.value === '*'
    ) {
      toggleAllColumns(options, false, true);
      setSelectedOptions([]);
    } else if (event.action === 'deselect-option') {
      toggleColumn(event.option, false, true);
      setSelectedOptions(value.filter((o) => o.value !== '*'));
    } else {
      toggleColumn(event.option, true, false);
      if (filteredColumnValues.length === value.length) {
        setSelectedOptions([{ label: 'All', value: '*' }, ...value]);
      } else {
        setSelectedOptions(value);
      }
    }
  };

  return (
    <div className='common-table'>
      { 
        <div className='common-table__toggle'>
          <MultiSelect
            options={[{ label: 'All', value: '*' }, ...filteredColumnValues]}
            placeholderButtonLabel='Show '
            getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedOptions}
            onChange={onChange}
            setState={setSelectedOptions}
            hideSearch={true}
          />

        </div>
      }
      <table id='data-table' className='display' width='100%'></table>

      {
        showUserConfirmModal && (
          <Confirm buttonText={'OK'} isCancelRequired={true} confirmTitle={'Are you sure you want to Block the User?'}
            onConfirm={() => { userBlockConfirmModal() }} onCancel={() => { setShowUserConfirmModal(false) }} />
        )
      }
      {
        showConfirmModal && (
          <Confirm buttonText={'OK'} confirmTitle={alertText} isCancelRequired={false}
            onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
        )
      }
      {/* {  <Loader />} */}
      {/*     //   date-range popup */}
      {/* {isShowDateRangePopup &&
        <div className='overlay overlay__index' id='dialog-range-popup' onClick={handleClick}>
          <div className='overlay__table common-table__popup'>
            <div className='common-table__popup__container'>
              <div className='overlay__dialog__title'>
                <div className='overlay__dialog__title__cancelBackground__cancel-box overlay__cancel' onClick={() => setIsShowDateRangePopup(false)}>
                  <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__right-arrow'></span>
                  <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__left-arrow'></span>
                </div>
              </div>
              <div className='overlay__dialog__elements'>
                <div className='pageHeader common-table__popup__header'>
                  <Name title='Select Range' />
                  <div className='notification__btn'>
                    <Button id='add-video' className='pageHeader__button notification__width done-button'
                      buttonClick={(e) => { handleDoneClick() }}>
                      Done
                    </Button>
                  </div>
                </div>
                <table border='0' cellSpacing='5' cellPadding='5'>
                  <tbody><tr>
                    <td>From Date:</td>
                    <td><input readOnly type='text' id='min' name='min'></input></td>
                  </tr>
                    <tr>
                      <td>To Date:</td>
                      <td><input readOnly type='text' id='max' name='max'></input></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      } */}
      {/*     //   date-range popup ends */}
    </div >
  );
};

CommonTable.propTypes = {
};

CommonTable.defaultProps = {
};

export default React.memo(CommonTable);
