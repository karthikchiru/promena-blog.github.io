/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../../components/button/index';
import Confirm from '../../components/confirmModal/confirm';
import Loader from '../../components/loader';
import '../../components/button/index.scss';
import $ from 'jquery';
import '../../components/commonTable/index.scss';
import '../../components/pageHeader/index.scss';
import Name from '../../components/name';
import 'datatables.net/js/jquery.dataTables.min.js';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-select-dt/js/select.dataTables.min.js'
import 'datatables.net-select-dt/css/select.dataTables.min.css'

const PopUp = ({ id, onCancel, onConfirm, commonTitle, input1Value, input2Value, input3Value, input4Value,
  isShowInput1, isShowInput2, isShowInput3, isShowInput4, isShowInput5, isShowInput6, input1Placeholder, input2Placeholder,
  input3Placeholder, input4Placeholder, input5Placeholder, isShowDescription1, isShowDescription2, desc1Placeholder,
  desc1TextValue, desc2TextValue, desc2Placeholder, isDropdown1Required, isDropdown2Required,
  dropdown1Placeholder, dropDown2Placeholder, dropdown1List, dropdown2List,
  isShowImage, btnText, updateFile, isShowUserType, userType, updateUrl, updateSelectedDropDown1Value,
  acceptFileType, isMultiple, isSearchDropdown, isFromNotification,
  isInput1Required, isInput2Required, isDescription1Required }) => {

  const [text1, setText1] = useState(input1Value ?? '');
  const [text2, setText2] = useState(input2Value ?? '');
  const [text3, setText3] = useState(input3Value ?? '');
  const [text4, setText4] = useState(input4Value ?? '');
  const [text5, setText5] = useState('');
  const [pageUrl, setPageUrl] = useState(updateUrl ? updateUrl : '');
  const [uploadFile, setUploadFile] = useState(updateFile ? { image: updateFile } : {});
  const [desc1Value, setDesc1Value] = useState(desc1TextValue ?? '');
  const [desc2Value, setDesc2Value] = useState(desc2TextValue ?? '');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isDropdown1Visible, setIsDropdown1Visible] = useState(false);
  const [isDropdown2Visible, setIsDropdown2Visible] = useState(false);
  const [dropdown1Items] = useState(dropdown1List ?? []);
  const [dropdown2Items] = useState(dropdown2List ?? []);
  const [filterData, setFilterData] = useState(dropdown1List ?? []);
  const [selectedDropdown1Value, setSelectedDropdown1Value] = useState({});
  const [selectedDropdown2Value, setSelectedDropdown2Value] = useState({});
  const [inputType, setInputType] = useState('file');
  const [isShowInputFile, setIsShowInputFile] = useState(false);

  const menuRef1 = useRef(null);
  const menuRef2 = useRef(null);

  const [columnsList, setColumnsList] = useState();
  const [videoArticledataList, setVideoArticleDataList] = useState();
  const [hideTable, setHideTable] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [videoArticleListDetails, setVideoArticleListDetails] = useState({});
  const [isDoneButtonDisable, setIsDoneButtonDisable] = useState(true);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef1.current && !menuRef1.current.contains(event.target)) {
        setIsDropdown1Visible(false);
      } else if (menuRef2.current && !menuRef2.current.contains(event.target)) {
        setIsDropdown2Visible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef1, menuRef2]);

  useEffect(() => {
    if (updateSelectedDropDown1Value) {
      let page = dropdown1List.filter((page) => page.name === updateSelectedDropDown1Value);
      setSelectedDropdown1Value(page[0]);
    }
  }, [updateSelectedDropDown1Value, dropdown1List]);

  useEffect(() => {
    if (uploadFile?.image && isShowInput6 && !isShowInputFile) {
      document.getElementsByClassName('img-file-block')[0].style.display = 'none';
    }
    if (isShowImage && uploadFile && !uploadFile.image?.includes('fakepath')) {
      const defaultBtn = document.querySelector('#default-btn');
      const wrapper = document.querySelector('.overlay__dialog__elements__image-container__wrapper');
      const cancelBtn = document.querySelector('#cancel-btn');
      const img = document.querySelector('#bannerImage');
      cancelBtn.addEventListener('click', function () {
        document.getElementsByClassName('image-field')[0].style.visibility = 'hidden';
        document.getElementsByClassName('image-content')[0].style.visibility = 'visible';
        img.src = '';
        wrapper.classList.remove('active');
      });
      if (defaultBtn) {
        if (uploadFile.image) {
          document.getElementsByClassName('image-field')[0].style.visibility = 'visible';
          document.getElementsByClassName('image-content')[0].style.visibility = 'hidden';
          img.src = uploadFile.image;
          wrapper.classList.add('active');
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadFile]);

  const handleClick = (e) => {
    if (e?.target.id === 'dialog-target') {
      onCancel();
    } else if (e?.target.id === 'dialog-target-table') {
      handleCancelAddPopup();
    }
    return;
  }

  const handleConfirm = (event) => {
    if ((!isInput1Required ? true : (isShowInput1 ? (text1 ? true : false) : true)) &&
      (!isInput2Required ? true : (isShowInput2 ? (text2 ? true : false) : true)) &&
      (isSearchDropdown ? (text5 ? true : false) : true) &&
      (isShowInput3 ? (text3 ? true : false) : true) && (isShowInput4 ? (text4 ? true : false) : true) &&
      (isShowInput5 ? ((uploadFile && Object.keys(uploadFile).length !== 0) ? true : false) : true) &&
      (isSearchDropdown ? (text5 ? true : false) : true) &&
      (!isDescription1Required ? true : (isShowDescription1 ? (desc1Value ? true : false) : true)) &&
      (isShowDescription2 ? (desc2Placeholder.includes('Models') ? true : (desc2Value ? true : false)) : true) &&
      (isDropdown1Required ? (selectedDropdown1Value.value ? true : false) : true) &&
      (isDropdown2Required ? (selectedDropdown2Value.value ? true : false) : true) &&
      (isShowImage ? (((uploadFile && Object.keys(uploadFile).length !== 0) || updateFile) ? true : false) : true) &&
      (isDropdown1Required ? (selectedDropdown1Value.value !== 'webpage' ? true : (pageUrl ? true : false)) : true) &&
      (isDropdown1Required && isFromNotification ? ((selectedDropdown1Value.value !== 'video' || selectedDropdown1Value.value !== 'artical') ? true : (videoArticleListDetails && Object.keys(videoArticleListDetails).length !== 0 ? true : false)) : true)) {
      setIsBtnDisabled(false);
      let obj = {
        text1: text1,
        text2: text2,
        text3: text3,
        text4: text4,
        file: uploadFile,
        desc1Value: desc1Value,
        desc2Value: desc2Value,
        selectedDropdown1Value: isSearchDropdown ? text5 : selectedDropdown1Value,
        selectedDropdown2Value: selectedDropdown2Value,
      }
      if (selectedDropdown1Value.value === 'webpage') {
        obj.pageUrl = pageUrl;
      }
      if (selectedDropdown1Value.value === 'video' || selectedDropdown1Value.value === 'artical') {
        obj.data = videoArticleListDetails;
      }
      if ((isShowInput6 || isShowImage) && obj.file.file) {
        const formData = new FormData();
        formData.append('file', obj.file.file);
        // uploadImageFile((response) => {
        //   const { success, message, data } = response;
          if (success) {
            let image = data[0].Location.trim();
            obj.file.image = image;
            onConfirm(event?.target.id, obj);
          }
        // }, formData)
      } else {
        onConfirm(event?.target.id, obj);
      }
    } else {
      setIsBtnDisabled(true);
    }
  }

  const handleValueChange = (event, key, index) => {
    let val = event?.target.value;
    let file, url, isChanged = true;
    setIsBtnDisabled(true);
    if (key === 1) {
      setText1(val);
    } else if (key === 2) {
      setText2(val);
    } else if (key === 3) {
      setText3(val);
    } else if (key === 4) {
      setText4(val);
    } else if (key === 5) {
      setDesc1Value(val);
    } else if (key === 6) {
      setDesc2Value(val);
    } else if (key === 7) {
      if (dropdown1Items[index].name !== 'webpage') {
        setPageUrl('')
      } else if (dropdown1Items[index].name === 'webpage') {
        isChanged = false;
      }
      setVideoArticleListDetails({});
      setSelectedDropdown1Value(dropdown1Items[index]);
      setIsDropdown1Visible(false);
      if (dropdown1Items[index].name === 'video' || dropdown1Items[index].name === 'artical') {
        document.getElementsByClassName('add-block')[0] ? document.getElementsByClassName('add-block')[0].style.display = 'none' : null;
        document.getElementsByClassName('add-button')[0] ? document.getElementsByClassName('add-button')[0].style.display = 'block' : null;
      }
    } else if (key === 8) {
      setSelectedDropdown2Value(dropdown2Items[index]);
      setIsDropdown2Visible(false);
    } else if (key === 9) {
      if (!val) {
        setUploadFile({});
      }
    } else if (key === 10) {
      file = event?.target.files;
      if (file) {
        if (isMultiple) {
          setUploadFile(prevfiles => {
            return { ...prevfiles, file: file }
          });
        } else {
          setUploadFile({
            file: file[0],
          });
        }
      }
    } else if (key === 11) {
      url = val ? val : '';
      setPageUrl(url);
    } else if (key === 12) {
      setText5(val);
      const filterValue = dropdown1List?.filter((value) => {
        return value?.name.toLowerCase().includes(val?.toLowerCase());
      });
      if (val) {
        setFilterData(dropdown1List);
        if (index) {
          setText5(dropdown1List[index].name);
        } else {
          setText5(val);
        }
      } else {
        setFilterData(filterValue);
        if (filterValue.length) {
          setSelectedDropdown1Value(filterValue);
        } else {
          setSelectedDropdown1Value({
            'name': val,
            'value': val
          });
        }
      }
      setIsDropdown1Visible(false);
    } else if (key === 13) {
      setUploadFile({});
      file = event?.target.files && event?.target.files[0];
      if (!file && val) {
        setUploadFile({
          image: val
        });
      } else {
        if (file) {
          setUploadFile({
            file: file
          });
        }
      }
    }
    if ((!isInput1Required ? true : (isShowInput1 ? (key === 1 ? (val ? true : false) : (text1 ? true : false)) : true)) &&
      (!isInput2Required ? true : (isShowInput2 ? (key === 2 ? (val ? true : false) : (text2 ? true : false)) : true)) &&
      (isSearchDropdown ? (key === 12 ? ((dropdown1Items[index]?.value || val) ? true : false) : (text5 ? true : false)) : true) &&
      (!isDescription1Required ? true : (isShowDescription1 ? (key === 5 ? (val ? true : false) : (desc1Value ? true : false)) : true)) &&
      (isShowDescription2 ? (desc2Placeholder.includes('Models') ? true : (key === 6 ? (val ? true : false) : (desc2Value ? true : false))) : true) &&
      (isShowInput5 ? ((file || (uploadFile && Object.keys(uploadFile).length !== 0)) ? true : false) : true) &&
      (isDropdown1Required ? (((dropdown1Items[index]?.value) || (selectedDropdown1Value?.value)) ? true : false) : true) &&
      (isDropdown1Required ? (key === 7 ? (dropdown1Items[index]?.value !== 'webpage' ? true : (pageUrl ? true : false)) : (key === 11 ? (url ? true : false) : (selectedDropdown1Value?.value === 'webpage' ? (pageUrl ? true : false) : true))) : true) &&
      ((isDropdown1Required && isFromNotification) ? (key === 7 ? (dropdown1Items[index].name !== 'video' ? true : (isChanged ? false : true)) : (key === 14 ? (index === 'cancel' ? false : ((videoArticleListDetails && Object.keys(videoArticleListDetails).length !== 0) ? true : false)) : true)) : true) &&
      ((isDropdown1Required && isFromNotification) ? (key === 7 ? (dropdown1Items[index].name !== 'artical' ? true : (isChanged ? false : true)) : (key === 14 ? (index === 'cancel' ? false : ((videoArticleListDetails && Object.keys(videoArticleListDetails).length !== 0) ? true : false)) : true)) : true) &&
      (isDropdown2Required ? (((dropdown2Items[index]?.value) || (selectedDropdown2Value?.value)) ? true : false) : true) &&
      (isShowImage ? (index === 'cancel' ? false : ((uploadFile && Object.keys(uploadFile).length !== 0) ? true : false)) : true) &&
      (isShowInput6 ? (key === 13 ? (index === 'cancel' ? false : ((val || file) ? true : false)) : ((uploadFile && Object.keys(uploadFile).length !== 0) ? true : false)) : true)) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }

  const handleImageUpload = () => {
    const defaultBtn = document.querySelector('#default-btn');
    const wrapper = document.querySelector('.overlay__dialog__elements__image-container__wrapper');
    const img = document.querySelector('#bannerImage');
    const cancelBtn = document.querySelector('#cancel-btn');
    cancelBtn.addEventListener('click', function () {
      document.getElementsByClassName('image-field')[0].style.visibility = 'hidden';
      document.getElementsByClassName('image-content')[0].style.visibility = 'visible';
      img.src = '';
      wrapper.classList.remove('active');
    });
    if (defaultBtn) {
      defaultBtn.click();
      defaultBtn.addEventListener('change', function () {
        let file = defaultBtn.files[0];
        if (file) {
          setUploadFile({
            file: file
          })
          document.getElementsByClassName('image-field')[0].style.visibility = 'visible';
          document.getElementsByClassName('image-content')[0].style.visibility = 'hidden';
          let reader = new FileReader();
          reader.onload = () => {
            let result = reader.result;
            img.src = result;
            wrapper.classList.add('active');
          }
          reader.readAsDataURL(file);
        }
      });

    }
  }

  const handleCancelBtn = () => {
    setUploadFile({});
    document.getElementsByClassName('overlay__img-block')[0].style.display = 'none';
    document.getElementsByClassName('img-file-block')[0].style.display = 'flex';
  }

  const handleToggleImageField = (event) => {
    setIsShowInputFile(true);
    let val = event?.target.value;
    if (val === 'uploadFile') {
      setInputType('file');
    } else {
      setInputType('text')
    }
    handleValueChange(null, 13, 'cancel');
  }

  const handleCancelAddBtn = () => {
    setVideoArticleListDetails({});
    document.getElementsByClassName('add-block')[0].style.display = 'none';
    document.getElementsByClassName('add-button')[0].style.display = 'block';
  }

  const handleAddVideoArticle = (id) => {
    setIsDoneButtonDisable(true);
    if (id === 'video') {
      getVideoListData([], 0);
    } else if (id === 'artical' || id === 'article') {
      getArticleListData([], 0);
    }
  }

  const getVideoListData = (prevData, page) => {
    setIsShowLoader(true);
    let payload = {
      limit: 500,
      page: page
    }
    // getVideoList((response) => {
    //   const { success, message, data } = response;
      setIsShowLoader(false);
      if (success && data?.data?.length) {
        let arr = [...prevData, ...data.data];
        if (data.currentPage + 1 < data.totalPages) {
          getVideoListData(arr, data.currentPage + 1);
        } else {
          let columnNames = [];
          var values = data.data;
          columnNames = Object.keys(values[0]);
          var column = [];
          for (var i in columnNames) {
            if (columnNames[i] === 'id') {
              column.push({
                data: columnNames[i],
                title: 'Select',
                render: function (value) {
                  return null;
                }
              });
            } else if (columnNames[i] === 'description') {
              column.push({
                data: columnNames[i],
                title: columnNames[i].charAt(0).toUpperCase() + columnNames[i].slice(1),
                render: function (value) {
                  if (value.length > 40) {
                    value = value.substring(0, 40) + '...';
                  }
                  return value;
                }
              });
            } else {
              column.push({
                data: columnNames[i],
                title: columnNames[i].charAt(0).toUpperCase() + columnNames[i].slice(1)
              });
            }
          }
          setHideTable(true);
          setColumnsList(column);
          setVideoArticleDataList(values);
        }
      } else if (!success) {
        setAlertText(message);
        setShowConfirmModal(true);
        setHideTable(false);
      }
    // }, payload);
  };

  const getArticleListData = (prevData, page) => {
    setIsShowLoader(true);
    let payload = {
      limit: 500,
      page: page
    }
    // getArticleList((response) => {
    //   const { success, message, data } = response;
      setIsShowLoader(false);
      if (success && data?.data?.length) {
        let arr = [...prevData, ...data.data];
        if (data.currentPage + 1 < data.totalPages) {
          getArticleListData(arr, data.currentPage + 1);
        } else {
          let columnNames = [];
          var values = data.data;
          columnNames = Object.keys(values[0]);
          var column = [];
          for (var i in columnNames) {
            if (columnNames[i] === 'id') {
              column.push({
                data: columnNames[i],
                title: 'Select',
                render: function (value) {
                  return null;
                }
              });
            } else if (columnNames[i] === 'description') {
              column.push({
                data: columnNames[i],
                title: columnNames[i].charAt(0).toUpperCase() + columnNames[i].slice(1),
                render: function (value) {
                  if (value.length > 40) {
                    value = value.substring(0, 40) + '...';
                  }
                  return value;
                }
              });
            } else {
              column.push({
                data: columnNames[i],
                title: columnNames[i].charAt(0).toUpperCase() + columnNames[i].slice(1)
              });
            }
          }
          setHideTable(true);
          setColumnsList(column);
          setVideoArticleDataList(values);
        }
      } else if (!success) {
        setAlertText(message);
        setShowConfirmModal(true);
        setHideTable(false);
      }
    // }, payload);
  };

  useEffect(() => {
    if (hideTable) {
      $(document).ready(function () {
        if ($.fn.dataTable.isDataTable('#data-table-popup')) {
          $('#data-table-popup').DataTable().columns().visible(true);
          $('#data-table-popup').DataTable().destroy();
          $('#data-table-popup').empty();
        }
        var table = $('#data-table-popup')
          .DataTable({
            data: videoArticledataList,
            columns: columnsList,
            paging: true,
            responsive: true,
            ordering: true,
            dom: 'ifrtlp',
            stateSave: true,
            bRetrieve: true,
            'bPaginate': true,
            'bFilter': true,
            'bJQueryUI': true,
            'bLengthChange': true,
            'bStateSave': true,
            'bDeferRender': true,
            'bAutoWidth': true,
            'order': [1, 'asc'],
            columnDefs: [{
              searchable: false,
              orderable: false,
              width: '1%',
              className: 'select-checkbox dt-body-center',
              targets: 0
            }],
            select: {
              // style: 'single'
              style: 'os',
              selector: 'td:first-child'
            },

          });

        $('#data-table-popup tbody').on('click', 'td:first-child', function () {
          let row = $(this)[0]?.parentElement?.className;
          if (row.includes('selected')) {
            setIsDoneButtonDisable(true);
            setVideoArticleListDetails({});
          } else {
            const data = table.row(this).data();
            setVideoArticleListDetails(data);
            setIsDoneButtonDisable(false);
          }
        });

        $('#data-table-popup thead tr').clone(true).appendTo('#data-table-popup thead');
        $('#data-table-popup thead tr:eq(1) th').each(function (i) {
          var title = $(this).text();
          $(this).off('click.DT');
          $(this).removeAttr('aria-controls');
          $(this).removeAttr('aria-sort');
          $(this).removeClass(
            'context-menu sorting sorting_desc sorting_asc sorting:after sorting_asc:after'
          );
          if (columnsList[i].data === 'id') {
            $(this).html(
              <tr></tr>
            );
          } else {
            $(this).html(
              '<input type="text" placeholder="Search ' + title + '" />'
            );
            $('input', this).on('keyup change', function () {
              if ($('#data-table-popup').DataTable().column(i).search() !== this.value) {
                $('#data-table-popup').DataTable().column(i).search(this.value).draw();
              }
            });
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoArticledataList]);

  const handleDoneClick = (event) => {
    setHideTable(false);
    document.getElementsByClassName('add-button')[0].style.display = 'none';
    document.getElementsByClassName('add-block')[0].style.display = 'display';
    handleValueChange(event, 14);
  }

  const handleCancelAddPopup = () => {
    setHideTable(false);
    if (videoArticleListDetails && Object.keys(videoArticleListDetails).length !== 0) {
      setVideoArticleListDetails({});
      document.getElementsByClassName('add-block')[0].style.display = 'none';
      document.getElementsByClassName('add-button')[0].style.display = 'block';
    }
  }

  return (
    <div className='overlay' id='dialog-target' onClick={handleClick}>
      <div className='overlay__dialog'>
        <div className='overlay__dialog__title'>
          <p className='overlay__dialog__title__description'>{commonTitle}</p>
          <div className='overlay__dialog__title__cancelBackground__cancel-box' onClick={onCancel}>
            <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__right-arrow'></span>
            <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__left-arrow'></span>
          </div>
        </div>
        <div className='overlay__dialog__elements'>
          {isShowUserType &&
            <div className='overlay__dialog__elements__input'>
              <div className='overlay__dialog__elements__customInput overlay__type'> User Type : {userType}</div>
            </div>
          }
          {isShowImage ?
            <div className='overlay__dialog__elements__image-container'>
              <p className='overlay__dialog__elements__label'>Upload an Image</p>
              <div className='overlay__dialog__elements__image-container__wrapper'>
                <div className='overlay__dialog__elements__image-container__main-image image-field'>
                  <img src='' id='bannerImage' alt='' />
                </div>
                <div className='overlay__dialog__elements__image-container__wrapper__image-content image-content'>
                  <button id='custom-btn' onClick={handleImageUpload} className='overlay__dialog__elements__image-container__wrapper__image-content__upload-btn overlay__dialog__elements__clr'>
                    * Upload an Image</button>
                </div>
                <div id='cancel-btn' onClick={(event) => { handleValueChange(event, 9, 'cancel') }}><i className='fas fa-times' ></i></div>
              </div>
              <input id='default-btn' accept='image/*' type='file' onChange={(event) => { handleValueChange(event, 9) }} hidden />
            </div>
            : null
          }
          {isShowInput1 ?
            <div className='overlay__dialog__elements__input'>
              <p className='overlay__dialog__elements__label'>{(isInput1Required ? '* ' : '') + input1Placeholder}</p>
              <input type='text' value={text1} placeholder={!text1 ? input1Placeholder : undefined}
                onKeyUp={(event) => { handleValueChange(event, 1) }} onChange={(event) => { handleValueChange(event, 1) }}
                className='overlay__dialog__elements__customInput'></input>
            </div>
            : null
          }
          {isShowInput2 ?
            <div className='overlay__dialog__elements__input'>
              <p className='overlay__dialog__elements__label'>{(isInput2Required ? '* ' : '') + input2Placeholder}</p>
              <input type='text' value={text2} placeholder={!text2 ? input2Placeholder : undefined}
                onKeyUp={(event) => { handleValueChange(event, 2) }} onChange={(event) => { handleValueChange(event, 2) }}
                className='overlay__dialog__elements__customInput'></input>
            </div>
            : null
          }
          {isSearchDropdown ?
            <div ref={menuRef1}>
              <p className='overlay__dialog__elements__label'>* {dropdown1Placeholder}</p>
              <input type='search' className='overlay__dialog__elements__customInput' onClick={() => { setIsDropdown1Visible(!isDropdown1Visible) }}
                onChange={(event) => { handleValueChange(event, 12) }} onKeyUp={(event) => { handleValueChange(event, 12) }}
                value={text5} placeholder={dropdown1Placeholder}
              >
              </input>
              {isDropdown1Visible &&
                <div className='overlay__dialog__elements__custom-dropdown__items-holder-category'>
                  {filterData.map((val, i) => (
                    <div className={text5 === filterData[i].name ? 'overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item overlay__activeTab' : 'overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item'}
                      key={i} onClick={(event) => { handleValueChange(event, 12, i); setText5(val.name); }} >
                      {val.name}
                    </div>
                  ))}
                </div>
              }
            </div>
            : null
          }
          {isShowInput3 ?
            <div className='overlay__dialog__elements__input'>
              <p className='overlay__dialog__elements__label'>* {input3Placeholder}</p>
              <input type='text' value={text3} placeholder={!text3 ? input3Placeholder : undefined}
                onKeyUp={(event) => { handleValueChange(event, 3) }} onChange={(event) => { handleValueChange(event, 3) }}
                className='overlay__dialog__elements__customInput'></input>
            </div>
            : null
          }
          {isShowInput4 ?
            <div className='overlay__dialog__elements__input'>
              <p className='overlay__dialog__elements__label'>* {input4Placeholder}</p>
              <input type='text' value={text4} placeholder={!text4 ? input4Placeholder : undefined}
                onKeyUp={(event) => { handleValueChange(event, 4) }} onChange={(event) => { handleValueChange(event, 4) }}
                className='overlay__dialog__elements__customInput'></input>
            </div>
            : null
          }
          {isShowInput5 &&
            <div className='overlay__dialog__elements__input'>
              <p className='overlay__dialog__elements__label'>* {input5Placeholder}</p>
              <input type='file' placeholder={input5Placeholder} multiple={isMultiple}
                onChange={(event) => { handleValueChange(event, 10) }} className='overlay__dialog__elements__customInput overlay__dialog__pad10'
                accept={acceptFileType} ></input>
            </div>
          }

          {isShowInput6 &&
            <div>
              <p className='overlay__dialog__elements__label'>Image</p>
              <div className='img-file-block u_flex overlay__marTop'>
                <label className='overlay__dialog__elements__customInput overlay__pad1'>
                  <input type='radio' name='urlIinput' value='uploadFile'
                    onChange={(event) => { handleToggleImageField(event) }}
                  /><span className='overlay__pad-left'> Upload Image </span></label>
                <label className='overlay__dialog__elements__customInput overlay__pad1 overlay__mar1'>
                  <input type='radio' name='urlIinput' value='imageURL'
                    onChange={(event) => { handleToggleImageField(event) }}
                  /><span className='overlay__pad-left'>Image URL </span></label>
              </div >
              {isShowInputFile &&
                <div className='overlay__dialog__elements__input'>
                  <input type={inputType} placeholder={inputType !== 'file' && '* Image URL'} accept='image/*'
                    onKeyUp={(event) => { handleValueChange(event, 13) }} onChange={(event) => { handleValueChange(event, 13) }}
                    className={inputType === 'file' ? 'overlay__dialog__elements__customInput overlay__dialog__pad10' : 'overlay__dialog__elements__customInput'}
                  ></input>
                </div>
              }
              {
                updateFile && !isShowInputFile &&
                <div className='overlay__img-block'>
                  <div className='overlay__dialog__elements__input overlay__img-block__input'>
                    <input readOnly type='text' title={uploadFile?.image} value={uploadFile?.image} placeholder='* Image URL' className='overlay__dialog__elements__customInput'></input>
                  </div>
                  <div id='cancel-img-btn' onClick={(event) => { handleCancelBtn(); handleValueChange(event, 13, 'cancel') }}><i className='fas fa-times overlay__cross-icon' ></i></div>
                </div>
              }
            </div >
          }
          {
            isShowDescription1 ?
              <div className='overlay__dialog__elements__txtArea'>
                <p className='overlay__dialog__elements__label'>{(isDescription1Required ? '* ' : '') + desc1Placeholder}</p>
                <textarea name='' id='' cols='10' rows='12' value={desc1Value}
                  placeholder={!desc1Value ? desc1Placeholder : undefined}
                  className='overlay__dialog__elements__textWidth' onKeyUp={(event) => { handleValueChange(event, 5) }}
                  onChange={(event) => { handleValueChange(event, 5) }}></textarea>
              </div>
              : null
          }
          {
            isShowDescription2 ?
              <div className='overlay__dialog__elements__txtArea'>
                <p className='overlay__dialog__elements__label'>{(isSearchDropdown ? '' : '* ') + desc2Placeholder}</p>
                <textarea name='' id='' cols='10' rows='12' value={desc2Value}
                  placeholder={!desc2Value ? desc2Placeholder : undefined}
                  className='overlay__dialog__elements__textWidth' onKeyUp={(event) => { handleValueChange(event, 6); }}
                  onChange={(event) => { handleValueChange(event, 6) }}></textarea>
              </div>
              : null
          }
          {
            isDropdown1Required ?
              <div ref={menuRef1} className={selectedDropdown1Value.name ? 'overlay__dialog__elements__custom-dropdown' : 'overlay__dialog__elements__custom-dropdown overlay__dialog__elements__clr'}>
                <p className='overlay__dialog__elements__label'>* {dropdown1Placeholder}</p>
                <div className='overlay__dialog__elements__custom-dropdown__selection' onClick={() => { setIsDropdown1Visible(!isDropdown1Visible) }}>
                  {selectedDropdown1Value.name ? selectedDropdown1Value.name.charAt(0).toUpperCase() + selectedDropdown1Value.name.slice(1) : dropdown1Placeholder}
                </div>
                {isDropdown1Visible ?
                  <div className='overlay__dialog__elements__custom-dropdown__items-holder'>
                    {dropdown1Items.map((val, i) => (
                      <div className={selectedDropdown1Value.name === dropdown1Items[i].name ? 'overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item overlay__activeTab' : 'overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item'}
                        key={i} onClick={(e) => { handleValueChange(e, 7, i) }} >
                        {val.name.charAt(0).toUpperCase() + val.name.slice(1)}
                      </div>
                    ))}
                  </div> : null}
              </div>
              : null
          }
          {
            (isDropdown1Required && selectedDropdown1Value.name === 'webpage') ?
              <div className='overlay__dialog__elements__input'>
                <p className='overlay__dialog__elements__label'>* URL</p>
                <input type='text' value={pageUrl} placeholder='URL' onKeyUp={(event) => { handleValueChange(event, 11) }}
                  onChange={(event) => { handleValueChange(event, 11) }} className='overlay__dialog__elements__customInput'></input>
              </div>
              : null
          }
          {
            (isDropdown1Required && isFromNotification && (selectedDropdown1Value.name === 'video' || selectedDropdown1Value.name === 'artical')) ?
              <div className='overlay__dialog__elements__input add-button'>
                <Button buttonId={id} className='overlay__dialog__footer__confirm overlay__add-btn'
                  buttonClick={() => handleAddVideoArticle(selectedDropdown1Value.name)}> Add {selectedDropdown1Value.name}</Button>
              </div>
              : null
          }
          {
            (isDropdown1Required && isFromNotification && (selectedDropdown1Value.name === 'video' || selectedDropdown1Value.name === 'artical') && videoArticleListDetails?.title) ?
              <div className='overlay__dialog__elements__input add-block'>
                <p className='overlay__dialog__elements__label'>* {selectedDropdown1Value.name} Name</p>
                <div className='overlay__img-block'>
                  <input readOnly type='text' value={videoArticleListDetails.title} placeholder='URL'
                    className='overlay__dialog__elements__customInput'></input>
                  <div id='cancel-title-btn' onClick={(event) => { handleCancelAddBtn(); handleValueChange(event, 14, 'cancel') }}><i className='fas fa-times overlay__cross-icon' ></i></div>
                </div>
              </div>
              : null
          }
          {
            isDropdown2Required ?
              <div ref={menuRef2} className={selectedDropdown2Value.name ? 'overlay__dialog__elements__custom-dropdown' : 'overlay__dialog__elements__custom-dropdown overlay__dialog__elements__clr'}>
                <p className='overlay__dialog__elements__label'>* {dropDown2Placeholder}</p>
                <div className='overlay__dialog__elements__custom-dropdown__selection' onClick={() => { setIsDropdown2Visible(!isDropdown2Visible) }}>
                  {selectedDropdown2Value.name ? selectedDropdown2Value.name : dropDown2Placeholder}
                </div>
                {isDropdown2Visible ?
                  <div className='overlay__dialog__elements__custom-dropdown__items-holder'>
                    {dropdown2Items.map((item, j) => (
                      <div key={j} onClick={(e) => { handleValueChange(e, 8, j) }}
                        className={selectedDropdown1Value.name === dropdown1Items[j].name ? 'overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item overlay__activeTab' : 'overlay__dialog__elements__custom-dropdown__items-holder__dropdown-item'}>
                        {item.name}
                      </div>
                    ))}
                  </div> : null}
              </div>
              : null
          }
        </div >
        <div className='overlay__dialog__footer u_display_flex u_align_items '>
          <Button buttonId={id} className='overlay__dialog__footer__confirm' isBtnDisabled={isBtnDisabled}
            buttonClick={handleConfirm}>{btnText}</Button>
        </div>
      </div >
      {hideTable ?
        <div className='overlay overlay__index' id='dialog-target-table' onClick={handleClick}>
          <div className='overlay__table'>
            <div className='overlay__dialog__title'>
              <div className='overlay__dialog__title__cancelBackground__cancel-box overlay__cancel' onClick={handleCancelAddPopup}>
                <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__right-arrow'></span>
                <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__left-arrow'></span>
              </div>
            </div>
            <div className='overlay__dialog__elements'>
              <div className='pageHeader'>
                <Name title={'Select ' + selectedDropdown1Value.name.charAt(0).toUpperCase() + selectedDropdown1Value.name.slice(1)} />
                <div className='notification__btn'>
                  <Button id='add-video' className='pageHeader__button notification__width' isBtnDisabled={isDoneButtonDisable} buttonClick={(e) => { handleDoneClick(e) }}>
                    Done
                  </Button>
                </div>
              </div>
              <div className='common-table'>
                <form id='frm-example'>
                  <table id='data-table-popup' className='display' width='100%'></table>
                </form>
              </div>
            </div>
            {showConfirmModal && (
              <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
                onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
            )}
            {isShowLoader ? <Loader /> : null}
          </div>
        </div> : null
      }
    </div >
  )
}

PopUp.propTypes = {
  id: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  commonTitle: PropTypes.string,
  input1Value: PropTypes.string,
  input2Value: PropTypes.string,
  input3Value: PropTypes.string,
  input4Value: PropTypes.string,
  updateUrl: PropTypes.string,
  updateSelectedDropDown1Value: PropTypes.string,
  isShowInput1: PropTypes.bool,
  isShowInput2: PropTypes.bool,
  isShowInput3: PropTypes.bool,
  isShowInput4: PropTypes.bool,
  isShowInput5: PropTypes.bool,
  isShowInput6: PropTypes.bool,
  isSearchDropdown: PropTypes.bool,
  input1Placeholder: PropTypes.string,
  input2Placeholder: PropTypes.string,
  input3Placeholder: PropTypes.string,
  input4Placeholder: PropTypes.string,
  input5Placeholder: PropTypes.string,
  isShowDescription1: PropTypes.bool,
  isShowDescription2: PropTypes.bool,
  isDropdown1Required: PropTypes.bool,
  isDropdown2Required: PropTypes.bool,
  desc1Placeholder: PropTypes.string,
  desc1TextValue: PropTypes.string,
  desc2TextValue: PropTypes.string,
  desc2Placeholder: PropTypes.string,
  dropdown1Placeholder: PropTypes.string,
  dropDown2Placeholder: PropTypes.string,
  dropdown1List: PropTypes.array,
  dropdown2List: PropTypes.array,
  imageValue: PropTypes.string,
  isShowImage: PropTypes.bool,
  input6Placeholder: PropTypes.string,
  btnText: PropTypes.string,
  updateFile: PropTypes.string,
  isShowUserType: PropTypes.bool,
  userType: PropTypes.string,
  acceptFileType: PropTypes.string,
  isMultiple: PropTypes.bool,
  isFromNotification: PropTypes.bool,
  isInput1Required: PropTypes.bool,
  isInput2Required: PropTypes.bool,
  isDescription1Required: PropTypes.bool,
}

PopUp.defaultProps = {
  id: '',
  onCancel: () => { },
  onConfirm: () => { },
  commonTitle: '',
  input1Value: '',
  input2Value: '',
  input3Value: '',
  input4Value: '',
  updateUrl: '',
  updateSelectedDropDown1Value: '',
  isShowInput1: false,
  isShowInput2: false,
  isShowInput3: false,
  isShowInput4: false,
  isShowInput5: false,
  isShowInput6: false,
  isSearchDropdown: false,
  input1Placeholder: '',
  input2Placeholder: '',
  input3Placeholder: '',
  input4Placeholder: '',
  input5Placeholder: '',
  isShowDescription1: false,
  isShowDescription2: false,
  isDropdown1Required: false,
  isDropdown2Required: false,
  desc1Placeholder: '',
  desc1TextValue: '',
  desc2TextValue: '',
  desc2Placeholder: '',
  dropdown1Placeholder: '',
  dropDown2Placeholder: '',
  dropdown1List: [],
  dropdown2List: [],
  imageValue: '',
  isShowImage: false,
  input6Placeholder: '',
  btnText: '',
  updateFile: '',
  isShowUserType: false,
  userType: '',
  acceptFileType: 'image/*',
  isMultiple: false,
  isFromNotification: false,
  isInput1Required: true,
  isInput2Required: true,
  isDescription1Required: true,
}

export default React.memo(PopUp);